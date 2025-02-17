import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import HomeLanguageSelector from '@features/home/HomeLanguageSelector';
import HomePostSortRadioGroup from '@features/home/HomePostSortRadioGroup';
import PostCard from '@commons/PostCard';
import supabase from '@libs/api/supabase.api';

export default function HomePage() {
  const [language, setLanguage] = useState('');
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function getPosts() {
      if (language && language !== '전체') {
        const { data } = await supabase.from('posts').select().eq('programming_language', language);
        setPostList(data);
      } else {
        const { data } = await supabase.from('posts').select();
        setPostList(data);
      }
    }
    getPosts();
  }, [language]);

  return (
    <StHomePageContainer>
      <StFilterPanelContainer>
        <HomeLanguageSelector language={language} setLanguage={setLanguage} />
        <HomePostSortRadioGroup />
      </StFilterPanelContainer>
      {postList.length !== 0
        ? postList.map((post) => (
            <StPostWrapper key={post.author}>
              <PostCard postData={post} />
            </StPostWrapper>
          ))
        : '해당 정보가 없습니다.'}
    </StHomePageContainer>
  );
}

const StPostWrapper = styled.div`
  width: 800px;
  height: 100px;
  margin: 10px 0 10px 0;
`;

const StHomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const StFilterPanelContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  gap: 20px;
`;
