import { useState, useEffect, useContext } from 'react';
import { MdOutlinePerson } from 'react-icons/md';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import Button from '@commons/Button';
import Input from '@commons/Input';
import PostCard from '@commons/PostCard';
import AuthContext from '@contexts/auth/auth.context';
import { saveUserInfo } from '@contexts/auth/auth.reducer';
import { getMyPosts } from '@api/post.api';
import supabase from '@api/supabase.api';

export default function MyPage() {
  const { auth, dispatch } = useContext(AuthContext);

  const [nickname, setNickname] = useState('');
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    setNickname(auth.nickname ?? '');
    async function fetchMyPost() {
      const data2 = await getMyPosts(auth.id);
      setMyPosts(data2);
    }
    fetchMyPost();
  }, [auth.id, auth.nickname]);

  async function handleUpdateInfo(e) {
    e.preventDefault();

    const { error } = await supabase.from('users').update({ nickname }).eq('id', auth.id);
    if (error) {
      return Swal.fire({
        title: 'Error!',
        text: '정보 수정에 실패했습니다.',
        icon: 'error',
        confirmButtonText: '확인'
      });
    }
    dispatch(saveUserInfo(auth.id, auth.email, nickname));
    return Swal.fire({
      title: 'Good job!',
      text: '정보 수정에 성공했습니다.',
      icon: 'success'
    });
  }

  return (
    <StMyPageContainer>
      <StUserInfoContainer>
        <StAvatar />
        <StForm onSubmit={handleUpdateInfo}>
          <label htmlFor="email">이메일</label>
          <Input disabled value={auth.email} />
          <label htmlFor="nickname">닉네임</label>
          <Input id="nickname" name="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <StButton type="submit">수정</StButton>
        </StForm>
      </StUserInfoContainer>
      <StPostContainer>
        {myPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </StPostContainer>
    </StMyPageContainer>
  );
}

const StMyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StUserInfoContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--round-md);
  padding: 1rem;
  gap: 2rem;
`;

const StAvatar = styled(MdOutlinePerson)`
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid var(--color-main-light);
  border-radius: var(--round-full);
  cursor: pointer;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > label {
    font-weight: bold;
  }
`;

const StButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const StPostContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > * {
    box-sizing: border-box;
  }
`;
