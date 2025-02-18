import styled from 'styled-components';
import PostAreaContainer from '@features/view-page/PostAreaContainer';
import CommentAreaContainer from '@features/view-page/CommentAreaContainer';
import { usePostDetails } from '@/hooks/view-page/usePostDetails';

export default function ViewPage() {
  const {
    postInfomation,
    comments,
    yourNickname,
    postNickname,
    authId,
    handleDeletePost,
    onSubmitCommentsHandler,
    onDeleteCommentsHandler
  } = usePostDetails();

  if (!postInfomation) return <p>로딩 중...</p>;

  return (
    <StViewPageContainer>
      <PostAreaContainer
        postId={postInfomation.id}
        postInfomation={postInfomation}
        postNickname={postNickname}
        authId={authId}
        comments={comments}
        onDelete={handleDeletePost}
      />
      <CommentAreaContainer
        onSubmit={onSubmitCommentsHandler}
        onDelete={onDeleteCommentsHandler}
        comments={comments}
        postId={postInfomation.id}
        nickname={yourNickname}
        authId={authId}
      />
    </StViewPageContainer>
  );
}

const StViewPageContainer = styled.main`
  border: 1px solid var(--color-border);
  border-radius: var(--round-md);
  background-color: var(--color-white);
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  gap: 18px;
  max-width: 1200px;
  font-size: var(--font-size-md);
`;
