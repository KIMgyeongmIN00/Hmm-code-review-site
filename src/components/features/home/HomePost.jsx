import styled from 'styled-components';
import { MdFavorite, MdFavoriteBorder, MdChatBubbleOutline, MdOutlinePerson } from 'react-icons/md';

export default function HomePost() {
  let isLikeActive = false;
  let postTitle = 'Title';
  let languageType = 'C++';
  let createAt = '2025년 *월 *일 **시 **분';
  let author = 'tester';
  let totalLikeCount = 100;
  let totalCommentCount = 100;

  return (
    <StHomePostContainer>
      <StPostTitle>{postTitle}</StPostTitle>
      <StPostInfo>
        {languageType}·{createAt}
      </StPostInfo>
      <StIconButtonsContainer>
        <div>
          <StWriterIcon />
          <StIconButtonContent>{author}</StIconButtonContent>
        </div>
        <div>
          <div>
            <StCommentIcon />
            <StIconButtonContent>{totalCommentCount}</StIconButtonContent>
          </div>
          <div>
            <StLikeIcon isLikeActive={isLikeActive} />
            <StIconButtonContent>{totalLikeCount}</StIconButtonContent>
          </div>
        </div>
      </StIconButtonsContainer>
    </StHomePostContainer>
  );
}

const StHomePostContainer = styled.div`
  border: 1px solid var(--color-border);
  border-radius: var(--round-lg);
  height: 100px;
  width: 800px;
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

const StIconButtonsContainer = styled.div`
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

const StIconButtonContent = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-main);
`;

const StWriterIcon = styled(MdOutlinePerson)`
  border: 1px solid var(--color-main);
  font-size: 25px;
  border-radius: var(--round-full);
`;

const StLikeIcon = styled(({ isLikeActive, ...rest }) =>
  isLikeActive ? <MdFavorite {...rest} /> : <MdFavoriteBorder {...rest} />
)`
  color: var(--color-red);
  font-size: 20px;
`;

const StCommentIcon = styled(MdChatBubbleOutline)`
  font-size: 20px;
`;
