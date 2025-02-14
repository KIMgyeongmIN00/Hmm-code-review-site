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
  color: var(--color-main-light);
`;

const StContainer = styled.div`
  height: 30px;
  box-sizing: border-box;

  border: 1px solid var(--color-main-light);
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
