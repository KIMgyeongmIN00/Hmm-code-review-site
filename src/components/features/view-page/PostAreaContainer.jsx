import { MdFavoriteBorder, MdFavorite, MdOutlineModeComment, MdOutlinePerson, MdKeyboard } from 'react-icons/md';
import styled from 'styled-components';
import IconButton from '@commons/IconButton';
import PostOnAuthButtons from '@features/view-page/in-post-area-container/PostOnAuthButtons';
import MDEditor from '@uiw/react-md-editor';

export default function PostAreaContainer({ postInfomation, postNickname, authId }) {
  return (
    <StPostAreaContainer>
      <StPostTitleWrapper>
        <h1>{postInfomation.title}</h1>
      </StPostTitleWrapper>
      <StLanguageTypeWrapper>
        <MdKeyboard size={30} />
        <p>{postInfomation.programming_language}</p>
      </StLanguageTypeWrapper>
      <StPostWriterWrapper>
        <StPersonIcon size={30} />
        <p>{postNickname}</p>
      </StPostWriterWrapper>
      <StCodeBoxWrapper>
        <StMDeditor source={postInfomation.content} />
      </StCodeBoxWrapper>
      <StPostToggleButtonContainer>
        <StPostLikeButtonContainer>
          <StLikeButton activeIcon={MdFavoriteBorder} inActiveIcon={MdFavorite} />
          <p>{postInfomation.created_at}</p>
        </StPostLikeButtonContainer>
        <StCommentIconContainer>
          <StCommentIcon size={26} />
          <p>{postInfomation.created_at}</p>
        </StCommentIconContainer>
      </StPostToggleButtonContainer>
      {postInfomation.user_id === authId && <PostOnAuthButtons />}
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

const StPersonIcon = styled(MdOutlinePerson)`
  width: 25px;
  height: 25px;
  border: 1px solid var(--color-main-light);
  border-radius: var(--round-full);
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

const StMDeditor = styled(MDEditor.Markdown)`
  background-color: var(--color-white);
  color: var(--color-black);
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
  margin-top: -3px;
  justify-self: center;
  font-size: 28px;
  background-color: var(--color-trans);
  border: none;
  color: var(--color-red);
  &:hover {
    background-color: var(--color-trans);
  }
`;

const StCommentIcon = styled(MdOutlineModeComment)`
  background-color: var(--color-trans);
  border: none;
  color: var(--color-black);
  &:hover {
    background-color: var(--color-trans);
  }
`;

const StCommentIconContainer = styled.div`
  justify-self: center;
  text-align: center;
  font-size: var(--font-size-md);
`;

const StPostLikeButtonContainer = styled.div`
  justify-self: center;
  text-align: center;
`;
