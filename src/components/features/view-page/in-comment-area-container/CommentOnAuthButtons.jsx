import Button from '@/components/commons/Button';
import styled from 'styled-components';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

export default function CommentOnAuthButtons() {
  return (
    <StCommentEditButtonContainer>
      <StButton $size="sm" $variant="solid" $color="point">
        <FaEdit />
      </StButton>
      <StButton $size="sm" $variant="solid" $color="point">
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
  grid-area: 1/9/2/9;
  justify-self: end;
`;

const StButton = styled(Button)`
  width: 38px;
  height: 38px;
  color: black;
  background-color: transparent;
  border: none;
`;
