import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '@/libs/api/supabase.api';

export default function useSignInForm() {
  const [signInState, setSignInState] = useState({ email: '', password: '' });
  const [signInErrorMessage, setSignInErrorMessage] = useState('');
  const navigate = useNavigate();

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
      navigate('/');
    }
  }

  return {
    signInState,
    signInErrorMessage,
    SignInChangeHandler,
    signInSubmitHandler
  };
}
