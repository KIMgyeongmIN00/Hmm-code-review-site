import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlineSearch } from 'react-icons/md';
import HomeMyPageBtn from '@layouts/header/HomeMyPageBtn';
import HomeAuthBtn from '@layouts/header/HomeAuthBtn';
import Input from '@commons/Input';

let isAuth = true;

export default function Header() {
  const navigate = useNavigate();
  return (
    <StWrapper>
      <StContainer>
        <img src="/image/logo.png" onClick={() => navigate('/')} />
        <div>
          <Input icon={MdOutlineSearch} placeholder="검색어를 입력해 주세요." />
          {isAuth ? <HomeMyPageBtn /> : <HomeAuthBtn />}
        </div>
      </StContainer>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-main-light);
`;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-white);
  max-width: var(--width-max);
  height: 80px;
  margin: auto;

  > img {
    cursor: pointer;
    width: 80px;
    height: 60px;
  }
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;
