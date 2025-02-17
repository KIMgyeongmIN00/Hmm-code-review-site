import Button from '@/components/commons/Button';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

export default function PostOnAuthButtons() {
  return (
    <StPostEditButtonContainer>
      <StButton $size="sm" $variant="solid" $color="point">
        <FaEdit />
      </StButton>
      <StButton $size="sm" $variant="solid" $color="point">
        <FaTrashAlt />
      </StButton>
    </StPostEditButtonContainer>
  );
}

const StPostEditButtonContainer = styled.div`
  grid-area: 9 / 1 / 9 / 2;
  display: grid;
  grid-auto-flow: column;
  column-gap: 12px;
  justify-self: center;
`;

const StButton = styled(Button)`
  width: 38px;
  height: 38px;
  color: var(--color-black);
  background-color: var(--color-trans);
  border: 1px solid var(--color-trans);
`;
