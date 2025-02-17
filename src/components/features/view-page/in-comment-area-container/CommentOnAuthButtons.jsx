import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import Button from '@commons/Button';

export default function CommentOnAuthButtons({ onDelete }) {
  return (
    <StCommentEditButtonContainer>
      <StButton onClick={onDelete} $size="sm" $variant="solid" $color="point">
        <FaTrashAlt />
      </StButton>
    </StCommentEditButtonContainer>
  );
}

const StCommentEditButtonContainer = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  column-gap: 6px;
  padding: 10px 10px 10px 10px;
  width: fit-content;
  grid-area: 1/8/2/9;
  justify-self: end;
`;

const StButton = styled(Button)`
  width: 38px;
  height: 38px;
  color: var(--color-black);
  background-color: var(--color-trans);
  border: none;
`;
