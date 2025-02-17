import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import supabase from '@api/supabase.api';
import { signUpValidate } from '@utils/validate.util';

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
  const [isDuplicateChecked, setIsDuplicateChecked] = useState({ email: false, nickname: false });
  const navigate = useNavigate();

  function signUpChangeHandler(e) {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({ ...prev, [name]: value }));

    const errorMsg = signUpValidate(name, value, signUpFormData);
    setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));

    if (name === 'email' || name === 'nickname') setIsDuplicateChecked((prev) => ({ ...prev, [name]: false }));
  }

  async function checkDuplicate(type) {
    if (type === 'email') {
      if (errorMessage.email !== '중복 체크를 해주세요.') return;

      const { data } = await supabase.from('users').select().eq('email', signUpFormData.email);
      if (data.length !== 0) return setErrorMessage((prev) => ({ ...prev, [type]: '사용 불가능한 이메일 입니다.' }));

      setIsDuplicateChecked((prev) => ({ ...prev, [type]: true }));
      return setErrorMessage((prev) => ({ ...prev, [type]: '사용가능한 이메일 입니다.' }));
    }

    if (type === 'nickname') {
      if (errorMessage.nickname === '최소 2자부터 최대 8자까지 가능합니다.') return;

      const { data } = await supabase.from('users').select().eq('nickname', signUpFormData.nickname);
      if (data.length !== 0) return setErrorMessage((prev) => ({ ...prev, [type]: '사용 불가능한 닉네임 입니다.' }));

      setIsDuplicateChecked((prev) => ({ ...prev, [type]: true }));
      return setErrorMessage((prev) => ({ ...prev, [type]: '사용가능한 닉네임 입니다.' }));
    }
  }

  function isValidForm() {
    for (const key in errorMessage) if (!isDuplicateChecked[key] && errorMessage[key]) return false;
    return true;
  }

  async function signUpSubmitHandler(e) {
    e.preventDefault();

    if (!isValidForm()) {
      Swal.fire({
        title: 'Error!',
        text: '입력하신 정보가 올바르지 않습니다. 다시 확인해주세요.',
        icon: 'error',
        confirmButtonText: '확인'
      });
      return;
    }

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

    if (error) {
      return Swal.fire({
        title: 'Error!',
        text: `회원가입 실패, 입력된 정보를 다시 확인해 주세요!`,
        icon: 'error',
        confirmButtonText: '확인'
      });
    }
    Swal.fire({
      title: '성공!',
      text: '회원가입 성공! 자동으로 로그인됩니다.',
      icon: 'success',
      confirmButtonText: '확인'
    }).then(() => navigate('/'));
  }

  return {
    signUpFormData,
    errorMessage,
    isDuplicateChecked,
    signUpSubmitHandler,
    signUpChangeHandler,
    checkDuplicate
  };
}
