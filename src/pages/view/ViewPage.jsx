import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import styled from 'styled-components';
import Button from '@commons/Button';

export default function ViewPage() {
  return (
    <StViewPageContainer>
      <StPostContainer>
        <h1>글 제목</h1>
        <p>언어타입</p>
        <p>작성자</p>
        <p>코드 박스</p>
        <StPostLikeContainer>
          <Button>
            <MdFavoriteBorder />
          </Button>
          <p>좋아요 갯수</p>
        </StPostLikeContainer>
        <StPostEditButtonContainer>
          <Button>수정</Button>
          <Button>삭제</Button>
        </StPostEditButtonContainer>
      </StPostContainer>
      <StCommentContainer>
        <h3>댓글 작성자</h3>
        <p>댓글 내용</p>
        <StCommentEditButtonContainer>
          <Button>수정</Button>
          <Button>삭제</Button>
        </StCommentEditButtonContainer>
        <StCommentLikeContainer>
          <Button>
            <MdFavoriteBorder />
          </Button>
          <p>좋아요 갯수</p>
        </StCommentLikeContainer>
      </StCommentContainer>
      <StCommentAddContainer>
        <input type="text" placeholder="댓글 입력 창" />
        <Button>댓글 입력 버튼</Button>
      </StCommentAddContainer>
    </StViewPageContainer>
  );
}

const StViewPageContainer = styled.main`
  border: 3px solid black;
  padding: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  gap: 18px;
`;

const StPostContainer = styled.div`
  border: 1px solid green;
  padding: 10px 10px 10px 10px;
  width: 80%;
`;

const StPostLikeContainer = styled.div`
  border: 1px solid green;
  padding: 10px 10px 10px 10px;
  flex-direction: column;
  width: fit-content;
`;

const StPostEditButtonContainer = styled.div`
  border: 1px solid green;
  padding: 10px 10px 10px 10px;
  gap: 10px;
  width: fit-content;
`;

const StCommentContainer = styled.div`
  border: 1px solid green;
  padding: 10px 10px 10px 10px;
  width: 80%;
`;

const StCommentEditButtonContainer = styled.div`
  border: 1px solid green;
  padding: 10px 10px 10px 10px;
  width: fit-content;
`;

const StCommentLikeContainer = styled.div`
  border: 1px solid green;
  padding: 10px 10px 10px 10px;
  width: fit-content;
`;

const StCommentAddContainer = styled.div`
  border: 1px solid green;
  padding: 10px 10px 10px 10px;
  width: 80%;
`;
