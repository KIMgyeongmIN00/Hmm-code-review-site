import { MdOutlineSearch } from 'react-icons/md';
import styled from 'styled-components';
import Input from '@commons/Input';

export default function SearchInput() {
  return <StInput icon={MdOutlineSearch} placeholder="search keyword..."></StInput>;
}

const StInput = styled(Input)``;
