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
        dispatch({ payload: true });
      } else {
        dispatch({ payload: false });
      }
    });
    return () => subscription.unsubscribe(); // 세션을 따로 풀 일이 있을까요?
  }, []);

  return <AuthContext.Provider value={{ isLogin }}>{children}</AuthContext.Provider>;
}
