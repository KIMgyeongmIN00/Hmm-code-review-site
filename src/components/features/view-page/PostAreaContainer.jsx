import { MdFavoriteBorder, MdFavorite, MdOutlineModeComment, MdModeComment } from 'react-icons/md';
import styled from 'styled-components';
import IconButton from '@/components/commons/IconButton';
import PostInfomationContainer from './in-post-area-container/PostInfomationContainer';
import PostOnAuthButtons from './in-post-area-container/PostOnAuthButtons';

export default function PostAreaContainer({ PostWriter }) {
  return (
    <StPostAreaContainer>
      <PostInfomationContainer PostWriter={PostWriter} />
      <StPostToggleButtonContainer>
        <StPostLikeButtonContainer>
          <StLikeButton activeIcon={MdFavoriteBorder} inActiveIcon={MdFavorite} />
          <p>{PostWriter.Likes}</p>
        </StPostLikeButtonContainer>
        <StCommentToggleButtonContainer>
          <StCommentButton activeIcon={MdOutlineModeComment} inActiveIcon={MdModeComment} />
          <p>{PostWriter.Comments}</p>
        </StCommentToggleButtonContainer>
      </StPostToggleButtonContainer>
      {PostWriter.IsAuth ? <PostOnAuthButtons /> : <></>}
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

const StLikeButton = styled(IconButton)`
  font-size: 28px;
  background-color: transparent;
  border: none;
  color: red;
  &:hover {
    background-color: transparent;
  }
`;

const StCommentButton = styled(IconButton)`
  font-size: 28px;
  background-color: transparent;
  border: none;
  color: var(--color-black);
  &:hover {
    background-color: transparent;
  }
`;

const StCommentToggleButtonContainer = styled.div`
  justify-self: center;
  text-align: center;
  font-size: var(--font-size-md);
`;

const StPostLikeButtonContainer = styled.div`
  justify-self: center;
  text-align: center;
`;
