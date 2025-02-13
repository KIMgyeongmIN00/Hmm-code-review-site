import styled from 'styled-components';
import { MdOutlineSearch } from 'react-icons/md';

export default function Header() {
  return (
    <StLayout>
      Header
      <div>
        <MdOutlineSearch />
        <input placeholder="search keyword..."></input>
      </div>
      <p>로그인 / 회원가입</p>
    </StLayout>
  );
}

const StLayout = styled.div`
  display: flex;
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

  & > div {
    height: 30px;
    box-sizing: border-box;

    background: #ffffff;
    border: 1px solid #b2b9c0;
    border-radius: 6px;

    display: flex;
    align-items: center;
    & > input {
      border-width: 0;

      &:focus {
        outline: none;
      }
    }
  }

  & > p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 0px;

    display: flex;
    align-items: center;

    color: #495057;
  }
`;
