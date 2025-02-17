import { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import MDEditor from '@uiw/react-md-editor';
import { MdFavoriteBorder, MdFavorite, MdOutlineModeComment, MdOutlinePerson, MdKeyboard } from 'react-icons/md';
import IconButton from '@commons/IconButton';
import PostOnAuthButtons from '@features/view-page/in-post-area-container/PostOnAuthButtons';
import supabase from '@/libs/api/supabase.api';
import { deletePostById } from '@/libs/api/post.api';
import AuthContext from '@/contexts/auth/auth.context';

export default function PostAreaContainer({ postInfo }) {
  const { auth } = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState(postInfo?.isLiked ?? false);
  const [postLikeCount, setPostLikeCount] = useState(postInfo?.likeCount ?? 0);

  const navigate = useNavigate();

  async function toggleLikeButton() {
    if (isLiked) {
      const { error } = await supabase.from('post_likes').delete().eq('user_id', auth.id).eq('post_id', postInfo?.id);
      if (!error) setPostLikeCount(postLikeCount - 1);
    } else {
      const { error } = await supabase.from('post_likes').insert([{ user_id: auth.id, post_id: postInfo?.id }]);
      if (!error) setPostLikeCount(postLikeCount + 1);
    }
    setIsLiked(!isLiked);
  }

  async function handlePostDeleteClick() {
    try {
      await deletePostById(postInfo?.id);
      return Swal.fire({
        title: 'Good job!',
        text: '게시글 삭제에 성공했습니다.',
        icon: 'success'
      }).then(() => navigate('/'));
    } catch (e) {
      return Swal.fire({
        title: 'Error!',
        text: '댓글 작성에 실패했습니다.',
        icon: 'error',
        confirmButtonText: '확인'
      });
    }
  }

  return (
    <StPostAreaContainer>
      <StPostTitleWrapper>
        <h1>{postInfo?.title}</h1>
      </StPostTitleWrapper>
      <StLanguageTypeWrapper>
        <MdKeyboard size={30} />
        <p>{postInfo?.programmingLanguage}</p>
      </StLanguageTypeWrapper>
      <StPostWriterWrapper>
        <StPersonIcon size={30} />
        <p>{postInfo?.author}</p>
      </StPostWriterWrapper>
      <StCodeBoxWrapper>
        <StMDeditor source={postInfo?.content} />
      </StCodeBoxWrapper>
      <StPostToggleButtonContainer>
        <StPostLikeButtonContainer>
          <StLikeButton
            onClick={toggleLikeButton}
            isActive={isLiked}
            activeIcon={MdFavorite}
            inActiveIcon={MdFavoriteBorder}
          />
          <p>{postLikeCount}</p>
        </StPostLikeButtonContainer>
        <StCommentIconContainer>
          <StCommentIcon size={26} />
          <p>{postInfo?.commentCount}</p>
        </StCommentIconContainer>
      </StPostToggleButtonContainer>
      {postInfo?.authorId === auth.id && <PostOnAuthButtons onDelete={handlePostDeleteClick} />}
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
