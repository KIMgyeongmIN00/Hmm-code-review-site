import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlineSearch } from 'react-icons/md';
import Input from '@commons/Input';
import HeaderMyPageButton from '@layouts/header/HomeMyPageBtn';
import HeaderAuthBtn from '@layouts/header/HomeAuthBtn';
import AuthContext from '@/contexts/auth/auth.context';
import debounce from '@libs/utils/debounce';

export default function Header() {
  const [searchWord, setSearchWord] = useState('');
  const { auth } = useContext(AuthContext);

  const handleSearchValue = function (e) {
    setSearchWord(e.target.value);
    console.log(e.target.value);
  };

  return (
    <StWrapper>
      <StHeaderContainer>
        <Link to="/">
          <img src="/image/logo.png" alt="로고 이미지" />
        </Link>
        <div>
          <Input
            icon={MdOutlineSearch}
            placeholder="검색어를 입력해 주세요."
            value={searchWord}
            onChange={handleSearchValue}
          />
          {auth.isSignin ? <HeaderMyPageButton /> : <HeaderAuthBtn />}
        </div>
      </StHeaderContainer>
    </StWrapper>
  );
}

const StSearchIcon = styled(MdOutlineSearch);

const StWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-main-light);
`;

const StHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-white);
  max-width: var(--width-max);
  height: 80px;
  margin: auto;

  img {
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
