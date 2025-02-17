import Button from '@/components/commons/Button';
import Input from '@/components/commons/Input';
import PostCard from '@/components/commons/PostCard';
import AuthContext from '@/contexts/auth/auth.context';
import supabase from '@/libs/api/supabase.api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { MdOutlinePerson } from 'react-icons/md';
import styled from 'styled-components';

function MyPage() {
  const { auth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      setEmail(session.user.email);
    });
    async function test() {
      const testData = await supabase.from('posts').select('*').eq('user_id', auth.id);
      setList(testData.data);
    }
    test();
  }, []);

  async function testFunc(e) {
    e.preventDefault();

    const { data, error } = await supabase.from('users').update({ nickname: nickname, email: email }).eq('id', auth.id);
    console.log('error', error);
  }

  return (
    <StMyPageContainer>
      <StUserInfoContainer>
        <StAvatar />
        <StForm onSubmit={testFunc}>
          <StLabel htmlFor="email">이메일</StLabel>
          <Input id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <StLabel htmlFor="nickname">닉네임</StLabel>
          <Input id="nickname" name="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <StButton type="submit">수정</StButton>
        </StForm>
      </StUserInfoContainer>
      <StPostContainer>
        {list.map((post) => (
          <StPostWrapper key={post.id}>
            <PostCard postData={post} />
          </StPostWrapper>
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

const StLabel = styled.label`
  font-size: var(--font-size-md);
  font-weight: bold;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const StPostWrapper = styled.div`
  width: 100%;
  margin: 10px 0 10px 0;
  padding-right: 20px;
  box-sizing: border-box;
`;

const StPostContainer = styled.div`
  margin-top: 20px;
`;
export default MyPage;
