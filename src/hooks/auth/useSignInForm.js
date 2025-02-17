import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import supabase from '@/libs/api/supabase.api';
import { useContext } from 'react';
import AuthContext from '@/contexts/auth/auth.context';
import { useEffect } from 'react';
import { onSignIn, onSignOut } from '@/contexts/auth/auth.reducer';

export default function useSignInForm() {
  const [signInState, setSignInState] = useState({ email: '', password: '' });
  const [signInErrorMessage, setSignInErrorMessage] = useState('');

  const { auth, dispatch } = useContext(AuthContext);
  const redirectedFrom = useLocation()?.state?.redirectedFrom;
  const navigate = useNavigate();

  if (auth.isSignin) {
    // todo dispatch 로 로그인 처리해주세요
    navigate(redirectedFrom === '/sign-in' ? '/' : redirectedFrom);
  }

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
      // todo dispatch 로 로그인 처리해주세요
      navigate(redirectedFrom === '/sign-in' ? '/' : redirectedFrom);
    }
  }

  return {
    signInState,
    signInErrorMessage,
    SignInChangeHandler,
    signInSubmitHandler
  };
}
