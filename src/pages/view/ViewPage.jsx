import React from 'react';
import styled from 'styled-components';
import PostAreaContainer from '@features/view-page/PostAreaContainer';
import CommentAreaContainer from '@features/view-page/CommentAreaContainer';

export default function ViewPage() {
  const postProps = {
    // 페이지 본문의 동적 변환 값을 props를 통해 임시적으로 표현하기 위한 객체
    // 추후 이 부분은 supabase의 db로 대체될 예정
    IsAuth: true,
    Title: '제목',
    CodeLanguage: 'Language',
    NickName: '글 작성자',
    Contents: '일단 내용입니다.',
    Comments: '15M',
    Likes: 0
  };

  const commentProps = {
    // 페이지 댓글의 동적 변환 값을 props를 통해 임시적으로 표현하기 위한 객체
    // 추후 이 부분은 supabase의 db로 대체될 예정
    IsAuth: true,
    Nickname: '댓글 작성자',
    Contents: '댓글입니다.',
    Likes: '1.1K'
  };

  return (
    <StViewPageContainer>
      <PostAreaContainer postProps={postProps} />{' '}
      {/* 페이지의 본문에 DB에 저장되어 있는 값에 따라 변화하는 값을 임의적으로 표현하기 위해 내린 props */}
      <CommentAreaContainer commentProps={commentProps} />{' '}
      {/* 페이지 댓글 상자에 DB에 저장되어 있는 값에 따라 변화하는 값을 임의적으로 표현하기 위해 내린 props */}
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
