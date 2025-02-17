import styled from 'styled-components';
import Swal from 'sweetalert2';
import CommentAddContainer from '@features/view-page/in-comment-area-container/CommentAddContainer';
import CommentBoxContainer from '@features/view-page/in-comment-area-container/CommentBoxContainer';
import { deleteCommentById } from '@api/comment.api';

export default function CommentAreaContainer({ postId, auth, comments, onSubmit, onDelete }) {
  async function handleCommentDelete(comment) {
    try {
      await deleteCommentById(comment.id);
      onDelete(comment.id);
    } catch (e) {
      return Swal.fire({
        title: 'Error!',
        text: '댓글 삭제에 실패했습니다.',
        icon: 'error',
        confirmButtonText: '확인'
      });
    }
  }

  return (
    <StCommentAreaContainer>
      {comments.map((comment) => {
        return (
          <CommentBoxContainer
            key={comment.id}
            onDelete={() => handleCommentDelete(comment)}
            comment={comment}
            authId={auth.id}
          />
        );
      })}
      <CommentAddContainer onSubmit={onSubmit} postId={postId} nickname={auth.nickname} />
    </StCommentAreaContainer>
  );
}

const StCommentAreaContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 18px;
`;
