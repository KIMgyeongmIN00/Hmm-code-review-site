import styled from 'styled-components';
import SearchInput from './SearchInput';
import MyPageBtn from './MyPageBtn';

let IsAuth = false;

export default function Header() {
  return (
    <StContainer>
      {IsAuth ? <MyPageBtn /> : <p> 로그인 / 회원가입</p>}
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

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #666666;

  & > p {
    margin: 0 30px 0 80px;
    font-family: 'Open Sans';
    font-size: 16px;
    line-height: 0px;

    display: flex;
    align-items: center;

    color: #495057;
  }
`;
