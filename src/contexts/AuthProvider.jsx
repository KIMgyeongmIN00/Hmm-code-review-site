import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth.context';
import authReducer from './auth.reducer';
import supabase from '../lib/supabase/supabase.api';

export default function AuthProvider({ children }) {
  const [isAuth, dispatch] = useReducer(authReducer, {
    login: false,
    userId: '',
    userNickName: ''
  });

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        dispatch({
          type: 'login',
          payload: {
            login: true,
            userId: session.user.id,
            userNickName: ''
          }
        });
      } else {
        dispatch({
          type: 'logout',
          payload: {
            login: false,
            userId: '',
            userNickName: ''
          }
        });
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>;
}
