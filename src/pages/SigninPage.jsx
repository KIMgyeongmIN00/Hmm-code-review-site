import styled from 'styled-components';
import { MdEmail, MdOutlinePrivateConnectivity, MdDoneOutline } from 'react-icons/md';
import Button from '@commons/Button';
import Input from '@commons/Input';
import { Link } from 'react-router-dom';

export default function SigninPage() {
  return (
    <StContainer>
      <h2>signin page</h2>
      <StLoginForm>
        <div>
          <label>아이디: </label>
          <Input type="text" placeholder="Insert your email" fontSize="16px" icon={MdEmail} />
        </div>

        <div>
          <label>비밀번호: </label>
          <Input type="password" placeholder="Insert your password" icon={MdOutlinePrivateConnectivity} />
        </div>
      </StLoginForm>
      <StLoginButton $varient="solid" $color="point" $size="lg" $round="lg">
        <MdDoneOutline />
        로그인
      </StLoginButton>
      <Link to="/"> 회원가입이 아직인가요? </Link>
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 880px;
  margin: 0 auto;
  border: 2px solid var(--color-border);
`;

const StLoginForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  flex-direction: column;
  margin: 50px;
  height: 350px;
`;

const StLoginButton = styled(Button)`
  text-align: center;
  line-height: normal;
  width: 360px;
  height: 80px;
  font-size: 24px;
  margin-bottom: 12px;

  & > svg {
    font-size: 32px;
    position: relative;
    left: -24px;
  }
`;
