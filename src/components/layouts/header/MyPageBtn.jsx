import { MdOutlinePerson } from 'react-icons/md';
import styled from 'styled-components';

export default function MyPageBtn() {
  return (
    <StWrapper>
      <StMypageIcon />
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  flex-wrap: row;
  align-items: center;
  margin: 0 50px 0 60px;
`;

const StMypageIcon = styled(MdOutlinePerson)`
  display: flex;
  align-items: center;
  border: 1px solid var(--color-main-light);
  border-radius: var(--round-full);
  width: 20px;
  height: 20px;
`;
