import styled from 'styled-components';
import { MdEmail, MdOutlinePrivateConnectivity, MdDoneOutline } from 'react-icons/md';
import Button from '@commons/Button';
import { Link } from 'react-router-dom';

export default function SigninPage() {
  return (
    <StContainer>
      <h2>signin page</h2>
      <StLoginForm>
        <div>
          <label>아이디: </label>
          <StInputContainer>
            <StIdIcon />
            <input type="text" placeholder="Insert your email" />
          </StInputContainer>
        </div>

        <div>
          <label>비밀번호: </label>
          <StInputContainer>
            <StPassIcon />
            <input type="text" placeholder="Insert your password" />
          </StInputContainer>
        </div>
      </StLoginForm>

      <StLoginButton $varient="solid" $color="point" $size="lg" $round="lg">
        <StLoginButtonIcon />
        로그인
      </StLoginButton>
      <Link to={'/'}> 회원가입이 아직인가요? </Link>
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 1000px;
  margin: 0 auto;

  & label {
    margin: 0;
  }
`;

const StLoginForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  flex-direction: column;
  margin: 50px;
  height: 350px;
`;

const StInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid var(--color-border);
  border-radius: var(--round-md);
  padding: 4px 8px;
  width: 320px;
  height: 30px;

  & > input {
    border: none;
    outline: none;
    font-size: 16px;
    flex: 1;
  }
`;

const StLoginButton = styled(Button)`
  text-align: center;
  line-height: normal;
  width: 360px;
  height: 80px;
  font-size: 24px;
  margin-bottom: 12px;
`;

const StPassIcon = styled(MdOutlinePrivateConnectivity)`
  font-size: 20px;
  margin-right: 4px;
`;

const StIdIcon = styled(MdEmail)`
  font-size: 20px;
  margin-right: 4px;
`;

const StLoginButtonIcon = styled(MdDoneOutline)`
  font-size: 32px;
  position: relative;
  left: -24px;
`;
