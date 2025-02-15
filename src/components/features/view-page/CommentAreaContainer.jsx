import styled from 'styled-components';
import CommentAddContainer from './in-comment-area-container/CommentAddContainer';
import CommentListContainer from './in-comment-area-container/CommentListContainer';

export default function CommentAreaContainer() {
  return (
    <StCommentAreaContainer>
      <CommentListContainer />
      <CommentAddContainer />
    </StCommentAreaContainer>
  );
}

const StCommentAreaContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 18px;
`;
