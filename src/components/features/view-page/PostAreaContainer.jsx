import React from 'react';
import Button from '@commons/Button';
import { MdFavoriteBorder } from 'react-icons/md';
import styled from 'styled-components';

export default function PostAreaContainer() {
  return (
    <StPostAreaContainer>
      <h1>글 제목</h1>
      <StLanguageType>언어타입</StLanguageType>
      <StPostWriter>작성자</StPostWriter>
      <StCodeBox>코드 박스</StCodeBox>
      <StPostLikeContainer>
        <Button $variant="ghost" $size="md" $round="xl">
          <MdFavoriteBorder />
        </Button>
        <p>좋아요 갯수</p>
      </StPostLikeContainer>
      <StPostEditButtonContainer>
        <Button $size="sm" $variant="solid" $color="point">
          수정
        </Button>
        <Button $size="sm" $variant="solid" $color="point">
          삭제
        </Button>
      </StPostEditButtonContainer>
    </StPostAreaContainer>
  );
}

const StPostAreaContainer = styled.div`
  border: 1px solid green;
  padding: 10px 10px 10px 10px;
  width: 80%;
`;

const StPostLikeContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  padding: 10px 10px 10px 10px;
  width: fit-content;
  margin-left: auto;
`;

const StPostEditButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 5px;
  padding: 10px 10px 10px 10px;
  width: fit-content;
`;
