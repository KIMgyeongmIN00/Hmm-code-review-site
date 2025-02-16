import styled from 'styled-components';
import { MdEmail, MdOutlinePrivateConnectivity, MdDoneOutline } from 'react-icons/md';
import Button from '@commons/Button';
import Input from '@commons/Input';
import { Link } from 'react-router-dom';
import useSignInForm from '@/hooks/auth/useSignInForm';

export default function SigninPage() {
  const { signInState, signInErrorMessage, SignInChangeHandler, signInSubmitHandler } = useSignInForm();
  return (
    <StContainer>
      <img src="/image/logo.png" />
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
        <Link to="/signUp" className="sign-in-link">
          회원가입이 아직인가요?
        </Link>
      </StSignInForm>
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

  > img {
    width: 400px;
    height: 280px;
  }
`;

const StSignInForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin: 50px;
  height: 400px;
  .sign-in-link {
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
