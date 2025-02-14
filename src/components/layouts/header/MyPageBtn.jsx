import { MdOutlinePerson } from 'react-icons/md';
import styled from 'styled-components';
import ButtonLink from '@commons/ButtonLink';

export default function MyPageBtn() {
  return (
    <StMypageBtn $variant="outline">
      <StMypageIcon />
    </StMypageBtn>
  );
}

const StMypageBtn = styled(ButtonLink)`
  margin: 0 10px 0 0;
  border-radius: var(--round-xl);
`;

const StMypageIcon = styled(MdOutlinePerson)`
  display: flex;
  align-items: center;
  border-radius: var(--round-xl);
`;
