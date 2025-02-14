import React from 'react';
import Button from '@commons/Button';
import { MdFavoriteBorder } from 'react-icons/md';
import styled from 'styled-components';

export default function CommentAreaContainer() {
  return (
    <StCommentAreaContainer>
      <StCommentListContainer>
        <h3>댓글 작성자</h3>
        <p>댓글 내용</p>
        <StCommentEditButtonContainer>
          <Button $size="sm" $variant="solid" $color="point">
            수정
          </Button>
          <Button $size="sm" $variant="solid" $color="point">
            삭제
          </Button>
        </StCommentEditButtonContainer>
        <StCommentLikeContainer>
          <Button $variant="ghost" $size="md" $round="xl">
            <MdFavoriteBorder />
          </Button>
          <p>좋아요 갯수</p>
        </StCommentLikeContainer>
      </StCommentListContainer>
      <StCommentAddContainer>
        <input type="text" placeholder="댓글 입력 창" />
        <Button $variant="solid" $size="lg" $color="point">
          댓글 입력 버튼
        </Button>
      </StCommentAddContainer>
    </StCommentAreaContainer>
  );
}

const StCommentAreaContainer = styled.div`
  border: 1px solid green;
  padding: 10px 10px 10px 10px;
  width: 80%;
`;

const StCommentListContainer = styled.div`
  border: 1px solid green;
  padding: 10px 10px 10px 10px;
`;

const StCommentEditButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 5px;
  padding: 10px 10px 10px 10px;
  width: fit-content;
`;

const StCommentLikeContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  padding: 10px 10px 10px 10px;
  width: fit-content;
`;

const StCommentAddContainer = styled.div`
  border: 1px solid green;
  padding: 10px 10px 10px 10px;
`;
