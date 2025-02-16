import styled from 'styled-components';
import CommentAddContainer from '@features/view-page/in-comment-area-container/CommentAddContainer';
import CommentBoxContainer from '@/components/features/view-page/in-comment-area-container/CommentBoxContainer';

export default function CommentAreaContainer({ commentProps }) {
  return (
    <StCommentAreaContainer>
      <CommentBoxContainer commentProps={commentProps} /> {/* 본문에 달린 댓글에 대한 정보가 들어있는 props */}
      <CommentAddContainer />
    </StCommentAreaContainer>
  );
}

const StCommentAreaContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 18px;
`;
