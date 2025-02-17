import Button from '@/components/commons/Button';
import Input from '@/components/commons/Input';
import { MdOutlinePerson } from 'react-icons/md';
import styled from 'styled-components';

function MyPage() {
  return (
    <StMyPageContainer>
      <StUserInfoContainer>
        <StAvatar />
        <StForm>
          <StLabel htmlFor="email">이메일</StLabel>
          <Input id="email" name="email" />
          <StLabel htmlFor="nickname">닉네임</StLabel>
          <Input id="nickname" name="nickname" />
        </StForm>
        <StButton>수정</StButton>
      </StUserInfoContainer>
    </StMyPageContainer>
  );
}

const StMyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StUserInfoContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--round-md);
  padding: 1rem;
  gap: 2rem;
`;

const StAvatar = styled(MdOutlinePerson)`
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid var(--color-main-light);
  border-radius: var(--round-full);
  cursor: pointer;
`;

const StLabel = styled.label`
  font-size: var(--font-size-md);
  font-weight: bold;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export default MyPage;
