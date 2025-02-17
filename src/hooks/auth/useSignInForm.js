import AuthContext from '@/contexts/auth/auth.context';
import { onSignIn } from '@/contexts/auth/auth.reducer';
import supabase from '@/libs/api/supabase.api';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useSignInForm() {
  const [signInState, setSignInState] = useState({ email: '', password: '' });
  const [signInErrorMessage, setSignInErrorMessage] = useState('');

  const { auth, dispatch } = useContext(AuthContext);
  const redirectedFrom = useLocation()?.state?.redirectedFrom || '/';
  const navigate = useNavigate();
  const redirectPath = redirectedFrom === '/sign-in' ? '/' : redirectedFrom;

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session) {
        dispatch(onSignIn(session.user.id, session.user.user_metadata?.nickname));
        navigate(redirectPath);
      } else {
        dispatch({ type: 'signOut' });
      }
    });

    return () => subscription.unsubscribe();
  }, [auth.isSignin, dispatch, navigate, redirectPath]);

  function SignInChangeHandler(e) {
    const { name, value } = e.target;

    if (name === 'email') {
      setSignInState((prev) => ({ ...prev, email: value }));
    } else {
      setSignInState((prev) => ({ ...prev, password: value }));
    }
    setSignInErrorMessage('');
  }

  async function signInSubmitHandler(e) {
    e.preventDefault();
    const { email, password } = signInState;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setSignInErrorMessage('아이디와 비밀번호가 일치하지 않습니다!');
    } else {
      const { data } = await supabase.from('users').select().eq('email', email);
      dispatch(onSignIn(data[0].id, data[0].nickname));
      navigate(redirectPath);
    }
  }

  return {
    signInState,
    signInErrorMessage,
    SignInChangeHandler,
    signInSubmitHandler
  };
}
