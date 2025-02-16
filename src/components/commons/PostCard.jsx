import styled from 'styled-components';
import { MdFavorite, MdFavoriteBorder, MdChatBubbleOutline, MdOutlinePerson } from 'react-icons/md';

export default function PostCard({ postData: postData }) {
  //TODO:사용자의 정보로 좋아요 누른지 확인하는 로직 구현
  let isLikeActive = false;

  return (
    <StPostContainer>
      <StPostTitle>{postData.postTitle}</StPostTitle>
      <StPostMeta>
        {postData.languageType}·{postData.createAt}
      </StPostMeta>
      <StIconsContainer>
        <div>
          <StAuthorIcon />
          <StIconLabel>{postData.author}</StIconLabel>
        </div>
        <div>
          <div>
            <StCommentIcon />
            <StIconLabel>{postData.totalCommentCount}</StIconLabel>
          </div>
          <div>
            {isLikeActive ? <StActiveLikeIcon /> : <StNotActiveLikeIcon />}
            <StIconLabel>{postData.totalLikeCount}</StIconLabel>
          </div>
        </div>
      </StIconsContainer>
    </StPostContainer>
  );
}

const StPostContainer = styled.div`
  border: 1px solid var(--color-border);
  border-radius: var(--round-lg);
  height: 100%;
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
  font-size: 20px;
`;
