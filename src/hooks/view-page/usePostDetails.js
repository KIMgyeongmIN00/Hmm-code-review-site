import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import supabase from '@/libs/api/supabase.api';

export function usePostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
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
        throw error;
      }
    }
    fetchData();
  }, [id]);

  async function getPost(id) {
    const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();
    if (error) {
      return null;
    }
    return data;
  }

  async function getComments(id) {
    const { data, error } = await supabase.from('comments').select('*').eq('post_id', id);
    if (error) {
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
      return null;
    }
    return user;
  }

  async function getNicknameWithAuthId(user) {
    if (!user?.id) return '';
    const { data, error } = await supabase.from('users').select('nickname').eq('id', user.id).single();
    if (error) {
      return '';
    }
    return data?.nickname;
  }

  async function getNicknameByUserId(userId) {
    if (!userId) return '';
    const { data, error } = await supabase.from('users').select('nickname').eq('id', userId).single();
    if (error) {
      return '';
    }
    return data?.nickname || '';
  }

  async function handleDeletePost() {
    const { error } = await supabase.from('posts').delete().eq('id', id);

    if (error) {
      Swal.fire({
        title: 'Error!',
        text: '게시글 삭제에 실패했습니다.',
        icon: 'error',
        confirmButtonText: '확인'
      });
      return;
    }
    Swal.fire({
      title: 'Good job!',
      text: '게시글이 삭제되었습니다.',
      icon: 'success',
      confirmButtonText: '확인'
    }).then(() => {
      navigate('/');
    });
  }

  function onSubmitCommentsHandler(comment) {
    setComments((prev) => [...prev, comment]);
  }

  function onDeleteCommentsHandler(comment) {
    setComments((prev) => prev.filter((item) => item.id !== comment.id));
  }

  return {
    postInfomation,
    comments,
    yourNickname,
    postNickname,
    authId,
    handleDeletePost,
    onSubmitCommentsHandler,
    onDeleteCommentsHandler
  };
}