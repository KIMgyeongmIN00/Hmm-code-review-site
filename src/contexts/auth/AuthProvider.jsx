import { useEffect, useReducer } from 'react';
import AuthContext from './auth.context';
import authReducer, { authInitialValue, onLogin } from './auth.reducer';
import supabase from '@/libs/api/supabase.api';

export default function AuthProvider({ children }) {
  const [auth, dispatch] = useReducer(authReducer, authInitialValue);

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session) {
        dispatch(onLogin(session.user.id, session.user.user_metadata?.nickname));
      } else {
        dispatch({ type: 'logout' });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>;
}
