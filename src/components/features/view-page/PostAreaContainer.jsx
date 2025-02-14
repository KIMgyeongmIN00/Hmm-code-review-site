import React from 'react';
import Button from '@commons/Button';
import { MdFavoriteBorder, MdKeyboard } from 'react-icons/md';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';

export default function PostAreaContainer() {
  return (
    <StPostAreaContainer>
      <StPostTitleWrapper>
        <h1>글 제목</h1>
      </StPostTitleWrapper>
      <StLanguageTypeWrapper>
        <p>
          <MdKeyboard /> : JavaScript
        </p>
      </StLanguageTypeWrapper>
      <StPostWriterWrapper>
        <CgProfile size={30} />
        <p>익명의 작성자</p>
      </StPostWriterWrapper>
      <StCodeBoxWrapper>
        <p>코드박스</p>
      </StCodeBoxWrapper>
      <StPostLikeContainer>
        <Button $variant="ghost" $size="md" $round="xl">
          <MdFavoriteBorder />
        </Button>
        <p>좋아요 수</p>
      </StPostLikeContainer>
      <StPostEditButtonContainer>
        <StButton $size="sm" $variant="solid" $color="point">
          <FaEdit />
        </StButton>
        <StButton $size="sm" $variant="solid" $color="point">
          <FaTrashAlt />
        </StButton>
      </StPostEditButtonContainer>
    </StPostAreaContainer>
  );
}

const StPostAreaContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 60px 60px repeat(6, minmax(48px, auto)) 60px;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
`;

const StPostLikeContainer = styled.div`
  grid-area: 9 / 1 / 10 / 2;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  padding: 10px 10px 10px 10px;
  width: fit-content;
  margin-left: auto;
`;

const StPostEditButtonContainer = styled.div`
  grid-area: 9 / 2 / 10 / 3;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  column-gap: 12px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const StPostTitleWrapper = styled.div`
  grid-area: 1 / 3 / 2 / 5;
  text-align: center;
  font-size: 60px;
`;

const StLanguageTypeWrapper = styled.div`
  grid-area: 2 / 6 / 3 / 5;
  text-align: right;
`;

const StPostWriterWrapper = styled.div`
  grid-area: 2 / 6 / 3 / 7;
  text-align: center;
`;

const StCodeBoxWrapper = styled.div`
  margin: 14px 20px 0px 20px;
  padding: 18px 18px 18px 18px;
  background-color: white;
  border-radius: var(--round-xl);
  box-shadow: 0px 0px 8px var(--color-main);
  grid-area: 3 / 1 / 9 / 7;
  text-align: center;
  font-size: 100px;
`;

const StButton = styled(Button)`
  width: 38px;
  height: 38px;
  color: black;
  box-shadow: 1px 1px 10px var(--color-point-dark);
`;
