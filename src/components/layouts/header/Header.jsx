import styled from 'styled-components';
import SearchInput from '@header/SearchInput';
import MyPageBtn from '@header/MyPageBtn';
import AuthBtn from '@header/AuthBtn';

let IsAuth = true;

export default function Header() {
  return (
    <StContainer>
      {IsAuth ? <MyPageBtn /> : <AuthBtn />}
      <SearchInput />
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background: #ffffff;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #b2b9c0;

  gap: 20px;

  font-family: 'Open Sans';
  font-size: 16px;
  line-height: 24px;

  color: #666666;
`;
