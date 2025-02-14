import styled from 'styled-components';
import Button from '@commons/Button';
import ButtonLink from '@commons/ButtonLink';

export default function AuthBtn() {
  return (
    <StContainer>
      <ButtonLink $variant="ghost" $size="sm">
        로그인
      </ButtonLink>
      /
      <ButtonLink $variant="ghost" $size="sm">
        회원가입
      </ButtonLink>
    </StContainer>
  );
}

const StContainer = styled.div`
  height: 40px;
  display: flex;
  flex-wrap: row;
  align-items: center;
`;
