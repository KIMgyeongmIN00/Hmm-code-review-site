import { useEffect, useReducer } from 'react';
import AuthContext from './auth.context';
import authReducer, { authInitialValue, clearUserInfo, saveUserInfo } from './auth.reducer';
import supabase from '@/libs/api/supabase.api';

export default function AuthProvider({ children }) {
  const [auth, dispatch] = useReducer(authReducer, authInitialValue);

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(async (_, session) => {
      if (session) {
        async function setAuth() {
          const { data } = await supabase.from('users').select().eq('id', session.user.id);
          dispatch(saveUserInfo(session.user.id, data[0].email, data[0].nickname));
        }
        setAuth();
      } else {
        dispatch(clearUserInfo);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const authValue = {
    auth,
    dispatch
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}
