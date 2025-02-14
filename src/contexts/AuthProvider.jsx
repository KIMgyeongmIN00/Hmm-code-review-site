import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth.context';
import authReducer from './auth.reducer';
import supabase from '../lib/supabase/supabase.api';

export default function AuthProvider({ children }) {
  const [isLogin, dispatch] = useReducer(authReducer, false);

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        dispatch({ type: 'login' });
      } else {
        dispatch({ type: 'logout' });
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ isLogin }}>{children}</AuthContext.Provider>;
}
