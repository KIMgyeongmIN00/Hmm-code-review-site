import { useState } from 'react';
import supabase from '@/libs/api/supabase.api';
import signUpValidate from '@/libs/utils/signUpValidate';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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

  function isValidForm() {
    for (const key in signUpFormData) {
      const errorMsg = signUpValidate(key, signUpFormData[key], signUpFormData);
      if (errorMsg && errorMsg !== '중복 체크를 해주세요.') {
        return false;
      }
    }
    return true;
  }

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
      const emailErrorMsg = signUpValidate('email', signUpFormData.email, signUpFormData);
      if (emailErrorMsg !== '중복 체크를 해주세요.') {
        setErrorMessage((prev) => ({ ...prev, email: emailErrorMsg }));
        return;
      }

      const { data } = await supabase.from('users').select().eq('email', signUpFormData.email);
      if (data.some((users) => users.email === signUpFormData.email)) {
        setErrorMessage((prev) => ({ ...prev, [name]: '사용 불가능한 이메일 입니다.' }));
      } else {
        setIsChecked((prev) => ({ ...prev, [name]: true }));
        setErrorMessage((prev) => ({ ...prev, [name]: '사용가능한 이메일 입니다.' }));
      }
    } else {
      const nicknameErrorMsg = signUpValidate('nickname', signUpFormData.nickname, signUpFormData);
      if (nicknameErrorMsg === '최소 2자부터 최대 8자까지 가능합니다.') {
        setErrorMessage((prev) => ({ ...prev, nickname: nicknameErrorMsg }));
        return;
      }
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
    // 유효성 검사 (오류가 있는지 확인)
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
      Swal.fire({
        title: 'Error!',
        text: `회원가입 실패: ${error.message}`,
        icon: 'error',
        confirmButtonText: '확인'
      });
      return;
    }
    Swal.fire({
      title: '성공!',
      text: '회원가입 성공! 자동으로 로그인됩니다.',
      icon: 'success',
      confirmButtonText: '확인'
    });
    navigate('/sign-in');
  }

  return { signUpFormData, errorMessage, isChecked, signUpSubmitHandler, signUpChangeHandler, signUpCheckDuplicate };
}
