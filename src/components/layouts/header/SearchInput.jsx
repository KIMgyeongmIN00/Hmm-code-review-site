import { MdOutlineSearch } from 'react-icons/md';
import styled from 'styled-components';

export default function SearchInput() {
  return (
    <StContainer>
      <SearchIcon />
      <input placeholder="search keyword..."></input>
    </StContainer>
  );
}

const SearchIcon = styled(MdOutlineSearch)`
  margin: 0 5px 0 5px;
`;

const StContainer = styled.div`
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
