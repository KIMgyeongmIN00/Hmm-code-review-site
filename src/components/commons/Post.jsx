import styled from 'styled-components';
import { MdFavorite, MdFavoriteBorder, MdChatBubbleOutline, MdOutlinePerson } from 'react-icons/md';

export default function Post({ postData: PostData }) {
  //TODO:사용자의 정보로 좋아요 누른지 확인하는 로직 구현
  let isLikeActive = false;

  return (
    <StPostContainer>
      <StPostTitle>{PostData.postTitle}</StPostTitle>
      <StPostInfo>
        {PostData.languageType}·{PostData.createAt}
      </StPostInfo>
      <StIconsContainer>
        <div>
          <StWriterIcon />
          <StIconContent>{PostData.author}</StIconContent>
        </div>
        <div>
          <div>
            <StCommentIcon />
            <StIconContent>{PostData.totalCommentCount}</StIconContent>
          </div>
          <div>
            <StLikeIcon isLikeActive={isLikeActive} />
            <StIconContent>{PostData.totalLikeCount}</StIconContent>
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

const StPostInfo = styled.p`
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

const StIconContent = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-main);
`;

const StWriterIcon = styled(MdOutlinePerson)`
  border: 1px solid var(--color-main);
  font-size: 25px;
  border-radius: var(--round-full);
`;

const StLikeIcon = styled(({ isLikeActive, ...props }) =>
  isLikeActive ? <MdFavorite {...props} /> : <MdFavoriteBorder {...props} />
)`
  color: var(--color-red);
  font-size: 20px;
`;

const StCommentIcon = styled(MdChatBubbleOutline)`
  font-size: 20px;
`;
