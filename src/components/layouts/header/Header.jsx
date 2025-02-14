import styled from 'styled-components';
import HomeMyPageBtn from '@layouts/header/HomeMyPageBtn';
import HomeAuthBtn from '@layouts/header/HomeAuthBtn';
import { MdOutlineSearch } from 'react-icons/md';
import Input from '@commons/Input';

let isAuth = true;

export default function Header() {
  return (
    <StWrapper>
      <StContainer>
        <img src="/image/logo.png" />
        <div>
          <Input icon={MdOutlineSearch} placeholder="search keyword..." />
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
