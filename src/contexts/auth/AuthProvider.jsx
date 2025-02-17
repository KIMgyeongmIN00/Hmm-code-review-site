import { useEffect, useReducer } from 'react';
import AuthContext from './auth.context';
import authReducer, { authInitialValue, onSignIn } from './auth.reducer';
import supabase from '@/libs/api/supabase.api';

export default function AuthProvider({ children }) {
  const [auth, dispatch] = useReducer(authReducer, authInitialValue);

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(async (_, session) => {
      if (session) {
        const { data } = await supabase.from('users').select().eq('id', session.user.id);
        dispatch(onSignIn(session.user.id, data[0].nickname));
      } else {
        dispatch({ type: 'signOut' });
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
