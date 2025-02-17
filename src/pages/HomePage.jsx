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
      const { data, error } = await supabase.from('posts').select();
      setPostList(data);
      return data;
    }
    getPosts();
  }, [language]);

  return (
    <StHomePageContainer>
      <StFilterPanelContainer>
        <HomeLanguageSelector language={language} setLanguage={setLanguage} />
        <HomePostSortRadioGroup />
      </StFilterPanelContainer>
      {postList.map((post) => (
        <StPostWrapper key={post.author}>
          <PostCard postData={post} />
        </StPostWrapper>
      ))}
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
