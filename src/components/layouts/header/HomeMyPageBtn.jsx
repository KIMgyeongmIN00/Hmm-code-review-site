import ButtonLink from '@/components/commons/ButtonLink';
import AuthContext from '@/contexts/auth/auth.context';
import { clearUserInfo } from '@/contexts/auth/auth.reducer';
import supabase from '@/libs/api/supabase.api';
import Button from '@commons/Button';
import { useContext } from 'react';
import { MdOutlinePerson } from 'react-icons/md';
import { Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function HeaderMyPageButton() {
  const { dispatch } = useContext(AuthContext);
  const { pathname } = useLocation();

  async function userSignout() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      dispatch(clearUserInfo());
      return <Navigate to={'/sign-in'} replace state={{ redirectedFrom: pathname }} />;
    }
  }

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
          <Button $variant="ghost" onClick={userSignout}>
            로그 아웃
          </Button>
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
  align-items: center;
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
