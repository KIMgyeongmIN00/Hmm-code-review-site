import styled from 'styled-components';
import ButtonLink from '@commons/ButtonLink';

export default function HomeAuthBtn() {
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
  display: flex;
  align-items: center;
`;
