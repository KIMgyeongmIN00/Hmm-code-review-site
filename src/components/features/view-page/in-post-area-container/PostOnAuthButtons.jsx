import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import Button from '@commons/Button';

export default function PostOnAuthButtons({ onDelete }) {
  return (
    <StPostEditButtonContainer>
      <StButton onClick={onDelete} $size="sm" $variant="solid" $color="point">
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
