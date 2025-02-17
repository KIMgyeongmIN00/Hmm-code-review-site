import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdFavorite, MdFavoriteBorder, MdChatBubbleOutline, MdOutlinePerson } from 'react-icons/md';
import { formatDate } from '@utils/format.util';

function PostCard({ id, createdAt, title, author, isLiked, commentCount, likeCount, programmingLanguage }) {
  return (
    <StPostContainer to={`/code/view/${id}`}>
      <StPostTitle>{title}</StPostTitle>
      <StPostMeta>
        {programmingLanguage} · {formatDate(createdAt)}
      </StPostMeta>
      <StIconsContainer>
        <div>
          <StAuthorIcon />
          <StIconLabel>{author}</StIconLabel>
        </div>
        <div>
          <div>
            <StCommentIcon />
            <StIconLabel>{commentCount}</StIconLabel>
          </div>
          <div>
            {isLiked ? <StActiveLikeIcon /> : <StNotActiveLikeIcon />}
            <StIconLabel>{likeCount}</StIconLabel>
          </div>
        </div>
      </StIconsContainer>
    </StPostContainer>
  );
}

export default React.memo(PostCard);

const StPostContainer = styled(Link)`
  cursor: pointer;
  border: 1px solid var(--color-border);
  border-radius: var(--round-lg);
  width: 100%;
  padding: 10px;
`;

const StPostTitle = styled.h1`
  font-size: var(--font-size-lg);
  font-weight: bold;
  color: var(--color-main-dark);
  margin: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StPostMeta = styled.p`
  color: var(--color-main-light);
  text-align: right;
  font-size: var(--font-size-sm);
  margin: 10px;
`;

const StIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }
  }
`;

const StIconLabel = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-main);
`;

const StAuthorIcon = styled(MdOutlinePerson)`
  border: 1px solid var(--color-main);
  font-size: 25px;
  color: var(--color-main-dark);
  border-radius: var(--round-full);
`;

const StActiveLikeIcon = styled(MdFavorite)`
  color: var(--color-red);
  font-size: 20px;
`;

const StNotActiveLikeIcon = styled(MdFavoriteBorder)`
  color: var(--color-red);
  font-size: 20px;
`;

const StCommentIcon = styled(MdChatBubbleOutline)`
  color: var(--color-main-dark);
  font-size: 20px;
`;
