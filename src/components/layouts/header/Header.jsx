import styled from 'styled-components';
import SearchInput from '@header/SearchInput';
import MyPageBtn from '@header/MyPageBtn';
import AuthBtn from '@header/AuthBtn';

let IsAuth = true;

export default function Header() {
  return (
    <StContainer>
      <LogoImg src="/image/logo2.png" />
      <StWrapper>
        <SearchInput />
        {IsAuth ? <MyPageBtn /> : <AuthBtn />}
      </StWrapper>
    </StContainer>
  );
}

const LogoImg = styled.img`
  margin: 0 0 0 40px;
  width: 80px;
  height: 60px;
`;

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #b2b9c0;

  font-family: 'Open Sans';
  font-size: 16px;
  line-height: 24px;

  color: #666666;
`;

const StWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
