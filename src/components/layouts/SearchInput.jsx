import { MdOutlineSearch } from 'react-icons/md';
import styled from 'styled-components';

export default function SearchInput() {
  return (
    <StLayout>
      <SearchIcon />
      <input placeholder="search keyword..."></input>
    </StLayout>
  );
}

const SearchIcon = styled(MdOutlineSearch)`
  margin: 0 5px 0 5px;
`;

const StLayout = styled.div`
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
`;
