import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth.context';
import authReducer from './auth.reducer';
import supabase from '../lib/supabase/supabase.api';

export default function AuthProvider({ children }) {
  const [isLogin, dispatch] = useReducer(authReducer, {
    login: false,
    userId: '',
    userNickName: ''
  });

  useEffect(() => {
    const getAuthInfo = async () => {
      const { data, error } = await supabase.from('users').select('*');

      if (error) {
        console.log('error', error);
        throw error;
      }

      const {
        data: { subscription }
      } = supabase.auth.onAuthStateChange((event, session) => {
        const sessionUser = data.find((user) => {
          return user.id === session.user.id;
        });

        if (session) {
          dispatch({
            type: 'login',
            payload: {
              login: true,
              userId: session.user.id,
              userNickName: sessionUser.nickname
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
    };

    getAuthInfo();
  }, []);

  return <AuthContext.Provider value={{ isLogin }}>{children}</AuthContext.Provider>;
}
