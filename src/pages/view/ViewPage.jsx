import styled from 'styled-components';
import PostAreaContainer from '@features/view-page/PostAreaContainer';
import CommentAreaContainer from '@features/view-page/CommentAreaContainer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import supabase, { getLikes } from '@/libs/api/supabase.api';

export default function ViewPage() {
  const { id } = useParams();
  const [postInfomation, setPostInfomation] = useState(null);
  const [comments, setComments] = useState([]);
  const [yourNickname, setYourNickname] = useState('');
  const [postNickname, setPostNickname] = useState('');
  const [authId, setAuthId] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const postData = await getPost(id);
        const authData = await getAuthObj();
        const authNicknameData = await getNicknameWithAuthId(authData);
        const postNicknameData = await getNicknameByUserId(postData?.user_id);
        const commentsData = await getComments(id);

        setYourNickname(authNicknameData || '로그인을 해주세요.');
        setPostInfomation(postData);
        setComments(commentsData);
        setPostNickname(postNicknameData);
        setAuthId(authData?.id);
      } catch (error) {
        console.error('데이터 수집에 실패하였습니다 :', error);
      }
    }
    fetchData();
  }, [id]);

  async function getPost(id) {
    const { data, error } = await supabase.from('posts').select('*').eq('id', id).single(); // 게시글 가져오기
    if (error) {
      console.error('본문 가져오는데 에러가 발생하였습니다! :', error);
      return null;
    }
    return data;
  }

  async function getComments(id) {
    const { data, error } = await supabase.from('comments').select('*').eq('post_id', id); // 댓글 목록 가져오기

    if (error) {
      console.error('댓글을 가져오는데 에러가 발생하였습니다! :', error);
      return null;
    }
    return data;
  }

  async function getAuthObj() {
    const {
      data: { user },
      error
    } = await supabase.auth.getUser();

    if (error || !user) {
      console.error('사용자 정보를 가져오는 데 실패했습니다:', error);
      return null;
    }
    return user;
  }

  async function getNicknameWithAuthId(user) {
    if (!user?.id) return ''; // user가 없으면 바로 반환
    const { data, error } = await supabase.from('users').select('nickname').eq('id', user.id).single();

    if (error) {
      console.error('닉네임을 가져오는 데 실패했습니다:', error);
      return '';
    }
    return data?.nickname; // 닉네임만 반환하도록 수정
  }

  async function getNicknameByUserId(userId) {
    if (!userId) return '';
    const { data, error } = await supabase.from('users').select('nickname').eq('id', userId).single();

    if (error) {
      console.error(`사용자 ID(${userId})의 닉네임을 가져오는 데 실패했습니다:`, error);
      return '';
    }
    return data?.nickname || '';
  }

  async function onClickLikeHandler() {}

  if (!postInfomation) return <p>로딩 중...</p>;

  function onSubmitCommentsHandler(comment) {
    setComments((prev) => [...prev, comment]);
  }

  function onDeleteCommentsHandler(comment) {
    setComments((prev) => prev.filter((item) => item.id !== comment.id));
  }

  return (
    <StViewPageContainer>
      <PostAreaContainer
        postId={id}
        postInfomation={postInfomation}
        postNickname={postNickname}
        authId={authId}
        comments={comments}
      />
      {/* URL의 id값이 있는 DB의 posts 테이블의 row를 props로 내림 */}
      <CommentAreaContainer
        onSubmit={onSubmitCommentsHandler}
        onDelete={onDeleteCommentsHandler}
        comments={comments}
        postId={id}
        nickname={yourNickname}
        authId={authId}
      />
      {/* 페이지 댓글 상자에 DB에 저장되어 있는 값에 따라 변화하는 값을 임의적으로 표현하기 위해 내린 props */}
    </StViewPageContainer>
  );
}

const StViewPageContainer = styled.main`
  /* box-shadow: 0px 0px 12px var(--color-border); */
  border: 1px solid var(--color-border);
  border-radius: var(--round-md);
  background-color: var(--color-white);
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  gap: 18px;
  max-width: 1200px;
  font-size: var(--font-size-md);
`;
