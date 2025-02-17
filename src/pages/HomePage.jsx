import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import HomeLanguageSelector from '@features/home/HomeLanguageSelector';
import HomePostSortRadioGroup from '@features/home/HomePostSortRadioGroup';
import PostCard from '@commons/PostCard';
import supabase from '@libs/api/supabase.api';
import { getLikes } from '@libs/api/supabase.api';
import { getComments } from '@/libs/api/supabase.api';

export default function HomePage() {
  const [language, setLanguage] = useState(null);
  const [postList, setPostList] = useState([]);
  const [sort, setSort] = useState('latest');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchWord = searchParams.get('search') || null;

  useEffect(() => {
    async function getPosts() {
      if (searchWord && language === null) {
        const { data } = await supabase.from('posts').select().textSearch('title', searchWord);
        const sortedPosts = await sortPosts(data, sort);
        setPostList(sortedPosts);
      } else {
        if (language && language !== '전체') {
          navigate('/');
          const { data } = await supabase.from('posts').select().eq('programming_language', language);
          const sortedPosts = await sortPosts(data, sort);
          setPostList(sortedPosts);
        } else {
          const { data } = await supabase.from('posts').select();
          const sortedPosts = await sortPosts(data, sort);
          setPostList(sortedPosts);
        }
      }
    }
    getPosts();
  }, [language, sort, searchWord]);

  return (
    <StHomePageContainer>
      <StFilterPanelContainer>
        <HomeLanguageSelector language={language} setLanguage={setLanguage} />
        <HomePostSortRadioGroup sort={sort} setSort={setSort} />
      </StFilterPanelContainer>
      {postList.length !== 0
        ? postList.map((post) => (
            <StPostWrapper key={post.id}>
              <PostCard postData={post} />
            </StPostWrapper>
          ))
        : '해당 정보가 없습니다.'}
    </StHomePageContainer>
  );
}

async function sortPosts(posts, sort) {
  switch (sort) {
    case 'latest':
      return posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    case 'like': {
      const postsWithLike = await Promise.all(
        posts.map(async (post) => {
          const likes = await getLikes(post.id);
          return { ...post, likeCount: likes ? likes.length : 0 };
        })
      );
      return postsWithLike.sort((a, b) => b.likeCount - a.likeCount);
    }

    case 'comment': {
      const postsWithComment = await Promise.all(
        posts.map(async (post) => {
          const comments = await getComments(post.id);
          return { ...post, commentCount: comments ? comments.length : 0 };
        })
      );
      return postsWithComment.sort((a, b) => b.commentCount - a.commentCount);
    }
    default:
      return posts;
  }
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
