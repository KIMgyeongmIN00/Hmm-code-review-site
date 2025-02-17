import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignUpForm from './SignUpForm';

export default function SignUpPage() {
  return (
    <StContainer>
      <Link to="/">
        <StImg src="/image/logo.png" />
      </Link>
      <SignUpForm />
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: var(--height-sm);
  width: 700px;
  height: 880px;
  margin: 0 auto;
  border: 1px solid var(--color-point);
`;

const StImg = styled.img`
  width: 300px;
  height: 200px;
  &:hover {
    cursor: pointer;
  }
`;
