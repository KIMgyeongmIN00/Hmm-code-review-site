import { MdOutlineSearch } from 'react-icons/md';
import styled from 'styled-components';
import Input from '@commons/Input';

export default function SearchInput() {
  return <StInput icon={MdOutlineSearch} placeholder="search keyword..."></StInput>;
}

const SearchIcon = styled(MdOutlineSearch)`
  margin: 0 5px 0 5px;
  color: var(--color-main-light);
`;

const StInput = styled(Input)`
  border-radius: var(--round-full);
`;
