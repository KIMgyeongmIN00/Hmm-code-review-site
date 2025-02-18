import { useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import PostCard from '@commons/PostCard';
import HomeLanguageSelector from '@features/home/HomeLanguageSelector';
import HomePostSortRadioGroup from '@features/home/HomePostSortRadioGroup';
import AuthContext from '@contexts/auth/auth.context';
import { getPosts } from '@api/post.api';

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const searchWord = searchParams.get('search') || null;

  const [language, setLanguage] = useState(null);
  const [sort, setSort] = useState('latest');

  const [posts, setPosts] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    async function fetchPosts() {
      const postData = await getPosts(auth.id, { language, keyword: searchWord });
      setPosts(postData);
    }
    fetchPosts();
  }, [auth.id, language, searchWord]);

  useEffect(() => {
    if (searchWord) return;
    setSort('latest');
    setLanguage(null);
  }, [searchWord]);

  useEffect(() => {
    setPosts((prev) => getSortedPosts(prev, sort));
  }, [sort]);

  return (
    <StHomePageContainer>
      <StFilterPanelContainer>
        <HomeLanguageSelector language={language} setLanguage={setLanguage} />
        <HomePostSortRadioGroup sort={sort} setSort={setSort} />
      </StFilterPanelContainer>
      <StPostListContainer>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
        {posts.length === 0 && <p>해당 정보가 없습니다.</p>}
      </StPostListContainer>
    </StHomePageContainer>
  );
}

function getSortedPosts(posts, sort) {
  switch (sort) {
    case 'latest':
      return [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    case 'like':
      return [...posts].sort((a, b) => b.likeCount - a.likeCount);
    case 'comment':
      return [...posts].sort((a, b) => b.commentCount - a.commentCount);
    default:
      return posts;
  }
}

const StPostListContainer = styled.div`
  width: 800px;
  > * {
    height: 100px;
    margin: 10px 0;
  }
  > p {
    text-align: center;
  }
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
