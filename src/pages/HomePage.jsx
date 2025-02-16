import { styled } from 'styled-components';
import HomeLanguageSelector from '@features/home/HomeLanguageSelector';
import HomePostSortRadioGroup from '@features/home/HomePostSortRadioGroup';
import Post from '@commons/PostCard';

export default function HomePage() {
  return (
    <StHomePageContainer>
      <StFilterPanelContainer>
        <HomeLanguageSelector />
        <HomePostSortRadioGroup />
      </StFilterPanelContainer>
      {postList.map((post) => (
        <StPostWrapper>
          <Post key={post.author} postData={post} />
        </StPostWrapper>
      ))}
    </StHomePageContainer>
  );
}

const postList = [
  {
    postTitle: 'Title',
    languageType: 'C++',
    createAt: '2025년 *월 *일 **시 **분',
    author: 'tester',
    totalLikeCount: 100,
    totalCommentCount: 100,
    id: 'RANDOM_CONSTANTS1'
  },
  {
    postTitle: 'Title',
    languageType: 'C++',
    createAt: '2025년 *월 *일 **시 **분',
    author: 'tester',
    totalLikeCount: 100,
    totalCommentCount: 100,
    id: 'RANDOM_CONSTANTS2'
  },
  {
    postTitle: 'Title',
    languageType: 'C++',
    createAt: '2025년 *월 *일 **시 **분',
    author: 'tester',
    totalLikeCount: 100,
    totalCommentCount: 100,
    id: 'RANDOM_CONSTANTS3'
  },
  {
    postTitle: 'Title',
    languageType: 'C++',
    createAt: '2025년 *월 *일 **시 **분',
    author: 'tester',
    totalLikeCount: 100,
    totalCommentCount: 100,
    id: 'RANDOM_CONSTANTS3'
  },
  {
    postTitle: 'Title',
    languageType: 'C++',
    createAt: '2025년 *월 *일 **시 **분',
    author: 'tester',
    totalLikeCount: 100,
    totalCommentCount: 100,
    id: 'RANDOM_CONSTANTS4'
  }
];

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
