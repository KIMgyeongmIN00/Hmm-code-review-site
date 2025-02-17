import { useState } from 'react';
import supabase from '@/libs/api/supabase.api';
import signUpValidate from '@/libs/utils/signUpValidate';
import { useNavigate } from 'react-router-dom';

export default function useSignUpForm() {
  const [signUpFormData, setSignUpFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    question: '',
    answer: ''
  });

  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    question: '',
    answer: ''
  });
  const [isChecked, setIsChecked] = useState({ email: false, password: false });
  const navigate = useNavigate();

  function signUpChangeHandler(e) {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({ ...prev, [name]: value }));

    const errorMsg = signUpValidate(name, value, signUpFormData);
    setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));

    if (name === 'email' || name === 'nickname') {
      setIsChecked((prev) => ({ ...prev, [name]: false }));
    }
  }

  async function signUpCheckDuplicate(name) {
    if (name === 'email') {
      const { data } = await supabase.from('users').select().eq('email', signUpFormData.email);
      if (data.some((users) => users.email === signUpFormData.email)) {
        setErrorMessage((prev) => ({ ...prev, [name]: '사용 불가능한 이메일 입니다.' }));
      } else {
        setIsChecked((prev) => ({ ...prev, [name]: true }));
        setErrorMessage((prev) => ({ ...prev, [name]: '사용가능한 이메일 입니다.' }));
      }
    } else {
      const { data } = await supabase.from('users').select().eq('nickname', signUpFormData.nickname);
      if (data.some((users) => users.nickname === signUpFormData.nickname)) {
        setErrorMessage((prev) => ({ ...prev, [name]: '사용 불가능한 닉네임 입니다.' }));
      } else {
        setIsChecked((prev) => ({ ...prev, [name]: true }));
        setErrorMessage((prev) => ({ ...prev, [name]: '사용가능한 닉네임 입니다.' }));
      }
    }
  }

  async function signUpSubmitHandler(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email: signUpFormData.email,
      password: signUpFormData.password,
      options: {
        data: {
          nickname: signUpFormData.nickname,
          question_id: signUpFormData.question,
          answer: signUpFormData.answer
        }
      }
    });
    navigate('/');
    console.log('error =>', error);
  }

  return { signUpFormData, errorMessage, isChecked, signUpSubmitHandler, signUpChangeHandler, signUpCheckDuplicate };
}
