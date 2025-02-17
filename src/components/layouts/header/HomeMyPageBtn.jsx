import { MdOutlinePerson } from 'react-icons/md';
import styled from 'styled-components';
import Button from '@commons/Button';
import ButtonLink from '@/components/commons/ButtonLink';

export default function HeaderMyPageButton() {
  return (
    <StContainer>
      <StMypageIcon />
      <StModalBox>
        <StDropdown>
          <ButtonLink $variant="ghost" to="/write">
            글 작성
          </ButtonLink>
          <ButtonLink $variant="ghost" to="/my-page">
            마이 페이지
          </ButtonLink>
          <Button $variant="ghost">로그 아웃</Button>
        </StDropdown>
      </StModalBox>
    </StContainer>
  );
}

const StModalBox = styled.div`
  position: absolute;
  top: 40px;
  width: 120px;
  height: 100px;
  padding: 10px;
  background-color: var(--color-white);
  border: 1px solid var(--color-main-light);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  z-index: 999;
`;

const StDropdown = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 4px;
`;

const StContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: column;
  align-items: center;
  justify-content: center;
  margin: 0 60px 0 60px;
  border-radius: var(--round-full);
  &:hover ${StModalBox} {
    opacity: 1;
    visibility: visible;
  }
`;

const StMypageIcon = styled(MdOutlinePerson)`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid var(--color-main-light);
  border-radius: var(--round-full);
`;
