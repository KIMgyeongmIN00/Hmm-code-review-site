import IconButton from '@commons/IconButton';
import styled from 'styled-components';
import { MdFavoriteBorder, MdFavorite, MdChatBubbleOutline, MdOutlinePerson } from 'react-icons/md';
import { useState } from 'react';

export default function HomePost() {
  const [isActive, setIsActive] = useState(false);
  return (
    <StHomePostContainer>
      <StPostTitle>Card Title</StPostTitle>
      <StPostContent>this is test for develop.</StPostContent>
      <StIconButtonsContainer>
        <StWriterIcon activeIcon={MdOutlinePerson} inActiveIcon={MdOutlinePerson}></StWriterIcon>
        <div>
          <IconButton
            activeIcon={MdChatBubbleOutline}
            inActiveIcon={MdChatBubbleOutline}
            onClick={test}
            $variant="ghost"
          />
          <StIconButtonCounter>100</StIconButtonCounter>
          <IconButton
            activeIcon={StActiveLikeIconButton}
            inActiveIcon={StNotActiveLikeIconButton}
            onClick={(e) => setIsActive(!e)}
            $variant="ghost"
          />
          <StIconButtonCounter>100</StIconButtonCounter>
        </div>
      </StIconButtonsContainer>
    </StHomePostContainer>
  );
}

const test = () => {
  console.log('first');
};

const StHomePostContainer = styled.div`
  border: 1px solid var(--color-border);
  border-radius: var(--round-md);
  height: 100px;
  width: 800px;
  padding: 10px;
`;

const StPostTitle = styled.h1``;

const StPostContent = styled.p``;

const StWriterIcon = styled(IconButton)`
  border-radius: var(--round-full);
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
  }
`;

const StIconButtonCounter = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-main);
`;

const StActiveLikeIconButton = styled(MdFavorite)`
  color: var(--color-point);
`;
const StNotActiveLikeIconButton = styled(MdFavoriteBorder)`
  color: var(--color-point);
`;
