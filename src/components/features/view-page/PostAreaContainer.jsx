import React from 'react';
import Button from '@commons/Button';
import { MdFavoriteBorder, MdFavorite, MdKeyboard, MdOutlineModeComment, MdModeComment } from 'react-icons/md';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';
import IconButton from '@/components/commons/IconButton';

export default function PostAreaContainer() {
  return (
    <StPostAreaContainer>
      <StPostTitleWrapper>
        <h1>넵</h1>
      </StPostTitleWrapper>
      <StLanguageTypeWrapper>
        <MdKeyboard size={30} />
        <p>JavaScript</p>
      </StLanguageTypeWrapper>
      <StPostWriterWrapper>
        <CgProfile size={30} />
        <p>익명의 작성자</p>
      </StPostWriterWrapper>
      <StCodeBoxWrapper>
        <p>코드박스</p>
      </StCodeBoxWrapper>
      <StPostToggleButtonContainer>
        <StPostLikeButtonContainer>
          <StIconButton activeIcon={MdFavoriteBorder} inActiveIcon={MdFavorite} />
          <p>999</p>
        </StPostLikeButtonContainer>
        <StCommentToggleButtonContainer>
          <StIconButton activeIcon={MdOutlineModeComment} inActiveIcon={MdModeComment} />
          <p>99</p>
        </StCommentToggleButtonContainer>
      </StPostToggleButtonContainer>
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
  grid-template-rows: minmax(60px, auto) 60px repeat(6, minmax(48px, auto)) 60px;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
`;

const StPostToggleButtonContainer = styled.div`
  grid-area: 9 / 6 / 10 / 6;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  column-gap: 12px;
  justify-self: center;
`;

const StPostEditButtonContainer = styled.div`
  grid-area: 9 / 1 / 9 / 2;
  display: grid;
  grid-auto-flow: column;
  column-gap: 12px;
  justify-self: center;
`;

const StPostTitleWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 7;
  text-align: center;
  font-size: var(--font-size-lg);

  & h1 {
    background-color: var(--color-point-light);
    border-radius: var(--round-md) var(--round-md) 0px 0px;
    padding: 15px 15px 15px 15px;
  }
`;

const StLanguageTypeWrapper = styled.div`
  grid-area: 2 / 6 / 3 / 5;
  text-align: center;
`;

const StPostWriterWrapper = styled.div`
  grid-area: 2 / 6 / 3 / 7;
  text-align: center;
`;

const StCodeBoxWrapper = styled.div`
  margin: 14px 20px 0px 20px;
  padding: 18px 18px 18px 18px;
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--round-xl);
  grid-area: 3 / 1 / 9 / 7;
  text-align: start;
  font-size: var(--font-size-md);
`;

const StButton = styled(Button)`
  width: 38px;
  height: 38px;
  color: black;
  background-color: transparent;
  border: 1px solid transparent;
`;

const StIconButton = styled(IconButton)`
  font-size: 28px;
  background-color: transparent;
  border: none;
  color: red;
  &:hover {
    background-color: transparent;
  }
`;

const StCommentToggleButtonContainer = styled.div`
  justify-self: center;
  text-align: center;
  font-size: var(--font-size-sm);
`;

const StPostLikeButtonContainer = styled.div`
  justify-self: center;
  text-align: center;
`;
