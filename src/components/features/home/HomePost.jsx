import styled from 'styled-components';
import { MdFavorite, MdChatBubbleOutline, MdOutlinePerson } from 'react-icons/md';
import { useState } from 'react';

export default function HomePost() {
  const [isActive, setIsActive] = useState(false);
  return (
    <StHomePostContainer>
      <StPostTitle>Card Title</StPostTitle>
      <StPostContent>this is test for develop.</StPostContent>
      <StIconButtonsContainer>
        <div>
          <StWriterIcon />
          <StIconButtonContent>author</StIconButtonContent>
        </div>
        <div>
          <div>
            <StCommentIcon />
            <StIconButtonContent>100</StIconButtonContent>
          </div>
          <div>
            <StLikeIcon />
            <StIconButtonContent>100</StIconButtonContent>
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
`;

const StPostContent = styled.p`
  color: var(--color-main-light);
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

const StLikeIcon = styled(MdFavorite)`
  color: var(--color-red);
  font-size: 20px;
`;

const StCommentIcon = styled(MdChatBubbleOutline)`
  font-size: 20px;
`;
