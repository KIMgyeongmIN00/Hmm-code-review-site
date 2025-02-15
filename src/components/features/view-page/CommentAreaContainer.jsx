import styled from 'styled-components';
import CommentAddContainer from './in-comment-area-container/CommentAddContainer';
import CommentListContainer from './in-comment-area-container/CommentListContainer';

export default function CommentAreaContainer({ CommentWriter }) {
  return (
    <StCommentAreaContainer>
      <CommentListContainer CommentWriter={CommentWriter} />
      <CommentAddContainer />
    </StCommentAreaContainer>
  );
}

const StCommentAreaContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 18px;
`;
