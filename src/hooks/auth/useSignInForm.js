import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '@libs/supabase';

export default function useSignInForm() {
  const [signInForm, setSignInForm] = useState({ email: '', password: '' });

  const navigate = useNavigate();
  function handleSignInFormChange(e) {
    const { name, value } = e.target;
    console.log(name);
    switch (name) {
      case 'email':
        return setSignInForm((prev) => ({ ...prev, email: value }));
      case 'password':
        return setSignInForm((prev) => ({ ...prev, password: value }));
      default:
        break;
    }
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const { email, password } = signInForm;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert('아이디와 비밀번호가 일치하지 않습니다!');
      throw error;
    } else {
      alert('로그인 성공!');
      navigate('/');
    }
  }

  return {
    signInForm,
    handleSignInFormChange,
    handleSignIn
  };
}
