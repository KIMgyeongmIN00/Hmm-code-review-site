import { MdOutlinePerson } from 'react-icons/md';
import styled from 'styled-components';

export default function MyPageBtn() {
  return (
    <StContainer>
      <StMypageIcon />
      <StModalBox />
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  flex-wrap: column;
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
  &:hover + div {
    opacity: 1;
    visibility: visible;
  }
`;

const StModalBox = styled.div`
  opacity: 0;
  visibility: hidden;
  padding: 10px;
  background-color: var(--color-point);
  border-radius: 8px;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;
