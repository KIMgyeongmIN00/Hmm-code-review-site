import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdFavorite, MdFavoriteBorder, MdChatBubbleOutline, MdOutlinePerson } from 'react-icons/md';
import AuthContext from '@/contexts/auth/auth.context';
import supabase from '@libs/api/supabase.api';

export default function PostCard({ postData: postData }) {
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState('');
  const { id } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const likesData = await getLikes(postData.id);
        const commentsData = await getComments(postData.id);
        const { nickname } = await getAuthorName(postData.user_id);
        setLikes(likesData);
        setComments(commentsData);
        setAuthor(nickname);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const isLikeActive = likes.includes(id);

  return (
    <StPostLink to={`/code/view/${postData.id}`}>
      <StPostContainer>
        <StPostTitle>{postData.title}</StPostTitle>
        <StPostMeta>
          {postData.programming_language}·{formatDate(postData.created_at)}
        </StPostMeta>
        <StIconsContainer>
          <div>
            <StAuthorIcon />
            <StIconLabel>{author}</StIconLabel>
          </div>
          <div>
            <div>
              <StCommentIcon />
              <StIconLabel>{likes.length}</StIconLabel>
            </div>
            <div>
              {isLikeActive ? <StActiveLikeIcon /> : <StNotActiveLikeIcon />}
              <StIconLabel>{comments.length}</StIconLabel>
            </div>
          </div>
        </StIconsContainer>
      </StPostContainer>
    </StPostLink>
  );
}

const formatDate = function (createAt) {
  const date = new Date(createAt);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();

  return `${year}년 ${month}월 ${day}일 ${hour}시 ${min}분`;
};
//Post의 좋아요 정보 불러오기
async function getLikes(postId) {
  const { data, error } = await supabase.from('post_likes').select('user_id').eq('post_id', postId);
  if (error) {
    throw error;
  }
  return data;
}
//Post의 댓글 정보 불러오기
async function getComments(postId) {
  const { data, error } = await supabase.from('comments').select().eq('post_id', postId);
  if (error) {
    throw error;
  }
  return data;
}
//Post의 작성자 닉네임 불러오기
async function getAuthorName(authorId) {
  const { data, error } = await supabase.from('users').select('nickname').eq('id', authorId);
  if (error) {
    throw error;
  }
  return data[0];
}

const StPostLink = styled(Link)`
  display: block;
  width: 100%;
`;

const StPostContainer = styled.div`
  cursor: pointer;
  border: 1px solid var(--color-border);
  border-radius: var(--round-lg);
  height: 100%;
  width: 100%;
  padding: 10px;
`;

const StPostTitle = styled.h1`
  font-size: var(--font-size-lg);
  font-weight: bold;
  color: var(--color-main-dark);
  margin: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StPostMeta = styled.p`
  color: var(--color-main-light);
  text-align: right;
  font-size: var(--font-size-sm);
  margin: 10px;
`;

const StIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }
  }
`;

const StIconLabel = styled.p`
  font-size: var(--font-size-md);
  color: var(--color-main);
`;

const StAuthorIcon = styled(MdOutlinePerson)`
  border: 1px solid var(--color-main);
  font-size: 25px;
  color: var(--color-main-dark);
  border-radius: var(--round-full);
`;

const StActiveLikeIcon = styled(MdFavorite)`
  color: var(--color-red);
  font-size: 20px;
`;

const StNotActiveLikeIcon = styled(MdFavoriteBorder)`
  color: var(--color-red);
  font-size: 20px;
`;

const StCommentIcon = styled(MdChatBubbleOutline)`
  color: var(--color-main-dark);
  font-size: 20px;
`;
