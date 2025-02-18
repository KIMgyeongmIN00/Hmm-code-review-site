import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import supabase from '@api/supabase.api';

export default function useSignInForm() {
  const [signInState, setSignInState] = useState({ email: '', password: '' });
  const [signInErrorMessage, setSignInErrorMessage] = useState('');

  const redirectedFrom = useLocation()?.state?.redirectedFrom || '/';
  const navigate = useNavigate();
  const redirectPath = redirectedFrom === '/sign-in' ? '/' : redirectedFrom;

  function SignInChangeHandler(e) {
    const { name, value } = e.target;

    if (name === 'email') return setSignInState((prev) => ({ ...prev, email: value }));
    else return setSignInState((prev) => ({ ...prev, password: value }));
  }

  async function signInSubmitHandler(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword(signInState);
    if (error) return setSignInErrorMessage('아이디와 비밀번호가 일치하지 않습니다!');
    return navigate(redirectPath);
  }

  return {
    signInState,
    signInErrorMessage,
    SignInChangeHandler,
    signInSubmitHandler
  };
}
