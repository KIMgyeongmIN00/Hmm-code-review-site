import styled from 'styled-components';
import { MdEmail, MdOutlinePrivateConnectivity, MdDoneOutline } from 'react-icons/md';
import Button from '@commons/Button';
import { Link } from 'react-router-dom';

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 1000px;
  margin: 0 auto;

  & p {
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
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  width: 320px;
  height: 30px;

  & > input {
    border: none;
    outline: none;
    font-size: 16px;
    flex: 1;
    border-color: gray;
    border-radius: var(--round-md);
  }
`;

const StLoginButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 80px;
  font-size: 24px;
  margin-bottom: 15px;
`;

const StPassIcon = styled(MdOutlinePrivateConnectivity)`
  font-size: 20px;
  margin-right: 5px;
`;

const StIdIcon = styled(MdEmail)`
  font-size: 20px;
  margin-right: 5px;
`;

const StLoginButtonIcon = styled(MdDoneOutline)`
  font-size: 30px;
  position: relative;
  left: -30px;
`;

export default function SigninPage() {
  return (
    <StContainer>
      <h2>signin page</h2>
      <StLoginForm>
        <div>
          <p>아이디: </p>
          <StInputContainer>
            <StIdIcon />
            <input type="text" placeholder="Insert your email" />
          </StInputContainer>
        </div>

        <div>
          <p>비밀번호: </p>
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
