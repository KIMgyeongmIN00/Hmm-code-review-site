import Button from '@commons/Button';
import styled from 'styled-components';

export default function AuthBtn() {
  return <StContainer $variant="ghost">로그인 / 회원가입</StContainer>;
}

const StContainer = styled(Button)`
  height: 40px;
`;
