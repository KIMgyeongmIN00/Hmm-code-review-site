import IconButton from '@commons/IconButton';
import styled from 'styled-components';
import { MdFavoriteBorder, MdFavorite, MdChatBubbleOutline } from 'react-icons/md';
import { useState } from 'react';

export default function HomePost() {
  const [isActive, setIsActive] = useState(false);
  return (
    <StHomePostContainer>
      <StPostTitle>Card Title</StPostTitle>
      <StPostContent>this is test for develop.</StPostContent>
      <IconButton activeIcon={MdFavorite} inActiveIcon={MdFavoriteBorder} onClick={(e) => setIsActive(!e)} />
      <IconButton
        activeIcon={MdChatBubbleOutline}
        inActiveIcon={MdChatBubbleOutline}
        onClick={console.log('gotoPage')}
      />
    </StHomePostContainer>
  );
}

const StHomePostContainer = styled.div`
  border: 1px solid var(--color-border);
  border-radius: var(--round-md);
  height: var(--height-xl);
  width: 800px;
  padding: 10px;
`;

const StPostTitle = styled.h1``;

const StPostContent = styled.p``;
