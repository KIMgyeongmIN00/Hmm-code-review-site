import React from 'react';
import styled from 'styled-components';
import PostAreaContainer from '@features/view-page/PostAreaContainer';
import CommentAreaContainer from '@features/view-page/CommentAreaContainer';

export default function ViewPage() {
  const PostWriter = {
    IsAuth: true,
    Title: '제목',
    CodeLanguage: 'Language',
    NickName: '글 작성자',
    Contents: '일단 내용입니다.',
    Comments: '15M',
    Likes: 0
  };

  const CommentWriter = {
    IsAuth: true,
    Nickname: '댓글 작성자',
    Contents: '댓글입니다.',
    Likes: '1.1K'
  };

  return (
    <StViewPageContainer>
      <PostAreaContainer PostWriter={PostWriter} />
      <CommentAreaContainer CommentWriter={CommentWriter} />
    </StViewPageContainer>
  );
}

const StViewPageContainer = styled.main`
  /* box-shadow: 0px 0px 12px var(--color-border); */
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
