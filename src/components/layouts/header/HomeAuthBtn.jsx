import styled from 'styled-components';
import ButtonLink from '@commons/ButtonLink';
import { Link } from 'react-router-dom';

export default function HeaderAuthBtn() {
  return (
    <StContainer>
      <ButtonLink $variant="ghost" $size="sm" to="/sign-in">
        로그인
      </ButtonLink>
      /
      <ButtonLink $variant="ghost" $size="sm" to="/sign-up">
        회원가입
      </ButtonLink>
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
