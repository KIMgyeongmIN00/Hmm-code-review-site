import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlineSearch } from 'react-icons/md';
import Input from '@commons/Input';
import HeaderMyPageButton from '@layouts/header/HomeMyPageBtn';
import HeaderAuthBtn from '@layouts/header/HomeAuthBtn';
import AuthContext from '@/contexts/auth/auth.context';

export default function Header() {
  const [searchWord, setSearchWord] = useState('');
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const handleSearchValue = function (e) {
    setSearchWord(e.target.value);
  };

  const handleIconClick = function () {
    if (searchWord.trim() !== '') {
      navigate(`/?search=${encodeURIComponent(searchWord)}`);
      setSearchWord('');
    }
  };

  const handleKeyDown = function (e) {
    if (e.key === 'Enter') {
      if (searchWord.trim() !== '') {
        navigate(`/?search=${encodeURIComponent(searchWord)}`);
        setSearchWord('');
      }
    }
  };

  return (
    <StWrapper>
      <StHeaderContainer>
        <Link to="/">
          <img src="/image/logo.png" alt="로고 이미지" />
        </Link>
        <div>
          <Input
            icon={() => <SearchIcon active={searchWord.trim() !== ''} onClick={handleIconClick} />}
            placeholder="검색어를 입력해 주세요."
            value={searchWord}
            onChange={handleSearchValue}
            onKeyDown={handleKeyDown}
          />
          {auth.isSignin ? <HeaderMyPageButton /> : <HeaderAuthBtn />}
        </div>
      </StHeaderContainer>
    </StWrapper>
  );
}

const ClickIcon = styled.div`
  cursor: ${({ active }) => (active ? 'pointer' : 'default')};
  color: ${({ active }) => (active ? 'var(--color-point)' : 'var(--color-main-light)')};
  transition: color 0.3s;
`;

const SearchIcon = function ({ active, onClick }) {
  return (
    <ClickIcon active={active} onClick={onClick}>
      <MdOutlineSearch />
    </ClickIcon>
  );
};

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
