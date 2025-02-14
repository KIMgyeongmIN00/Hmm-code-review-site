import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '@libs/supabase/supabase';

export default function useSignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      alert('로그인 성공!');
      navigate('/');
    } catch (error) {
      alert('아이디와 비밀번호가 일치하지 않습니다!');
      console.error(error);
    }
  }

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSignIn
  };
}
