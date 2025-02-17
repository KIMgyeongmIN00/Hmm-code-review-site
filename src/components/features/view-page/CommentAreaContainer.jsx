import styled from 'styled-components';
import CommentAddContainer from '@features/view-page/in-comment-area-container/CommentAddContainer';
import CommentBoxContainer from '@features/view-page/in-comment-area-container/CommentBoxContainer';

export default function CommentAreaContainer({ comments, postId, nickname }) {
  return (
    <StCommentAreaContainer>
      {comments.map((comment) => {
        return <CommentBoxContainer key={comment.Id} commentProps={comment} />; //본문에 달린 댓글에 대한 정보가 들어있는 props
      })}
      <CommentAddContainer postId={postId} nickname={nickname} />
    </StCommentAreaContainer>
  );
}

const StCommentAreaContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 18px;
`;
