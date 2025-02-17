import useSignInForm from '@/hooks/auth/useSignInForm';
import Button from '@commons/Button';
import Input from '@commons/Input';
import { MdDoneOutline, MdEmail, MdOutlinePrivateConnectivity } from 'react-icons/md';
import { Link } from 'react-router-dom';
import supabase from '@/libs/api/supabase.api';
import styled from 'styled-components';

export default function SigninPage() {
  const { signInState, signInErrorMessage, SignInChangeHandler, signInSubmitHandler } = useSignInForm();

  async function handleSignInWithGoogleClick() {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    });
  }

  return (
    <StContainer>
      <Link to="/">
        <StImg src="/image/logo.png" />
      </Link>
      <StSignInForm onSubmit={signInSubmitHandler}>
        <StErrorMessage $show={!!signInErrorMessage}>{signInErrorMessage || ''}</StErrorMessage>

        <div>
          <label>아이디: </label>
          <Input
            name="email"
            type="text"
            placeholder="이메일을 입력해주세요"
            width="320px"
            value={signInState.email}
            onChange={SignInChangeHandler}
            icon={MdEmail}
            required
          />
        </div>

        <div>
          <label>비밀번호: </label>
          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            width="320px"
            value={signInState.password}
            onChange={SignInChangeHandler}
            icon={MdOutlinePrivateConnectivity}
            required
          />
        </div>

        <StSignInButton type="submit" $color="point" $size="lg" $round="lg">
          <MdDoneOutline />
          로그인
        </StSignInButton>
        <Link to="/sign-up">회원가입이 아직인가요?</Link>
      </StSignInForm>
      <StGoogleLoginButton onClick={handleSignInWithGoogleClick}>
        <img src="/image/googleLogo.png" alt="구글 로고" />
        <span>Sign In With Google</span>
      </StGoogleLoginButton>
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: var(--height-sm);
  width: 700px;
  height: 880px;
  margin: 0 auto;
  border: 1px solid var(--color-point);
`;
const StSignInForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  height: 400px;
  > a {
    color: var(--color-point-dark);
  }
`;

const StErrorMessage = styled.p`
  text-align: center;
  color: red;
  height: var(--height-sm);
  font-size: var(--font-size-md);
  visibility: ${(show) => (show ? 'visible' : 'hidden')};
`;

const StImg = styled.img`
  width: 400px;
  height: 280px;
  &:hover {
    cursor: pointer;
  }
`;
const StSignInButton = styled(Button)`
  text-align: center;
  line-height: normal;
  width: 360px;
  height: 80px;
  font-size: var(--font-size-lg);
  margin-bottom: 12px;

  & > svg {
    font-size: 32px;
    position: relative;
    left: -var(--font-size-lg);
  }
`;
const StGoogleLoginButton = styled(Button).attrs({ $variant: 'outline' })`
  height: 40px;
  margin: 10px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--round-lg);
  > img {
    width: 20px;
  }
`;
