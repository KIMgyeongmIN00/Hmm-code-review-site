import styled from 'styled-components';
import CommentAddContainer from '@features/view-page/in-comment-area-container/CommentAddContainer';
import CommentBoxContainer from '@features/view-page/in-comment-area-container/CommentBoxContainer';
import { useEffect } from 'react';
import supabase, { getComments } from '@/libs/api/supabase.api';
import { useState } from 'react';

export default function CommentAreaContainer({ postId, nickname, authId, comments, onSubmit, onDelete }) {
  return (
    <StCommentAreaContainer>
      {comments.map((comment) => {
        return (
          <CommentBoxContainer
            key={comment.id}
            onDelete={async () => {
              const { error } = await supabase.from('comments').delete().eq('id', comment.id);
              console.log(error);
              onDelete(comment);
            }}
            commentProps={comment}
            authId={authId}
          />
        ); //본문에 달린 댓글에 대한 정보가 들어있는 props
      })}
      <CommentAddContainer onSubmit={onSubmit} postId={postId} nickname={nickname} />
    </StCommentAreaContainer>
  );
}

const StCommentAreaContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 18px;
`;
