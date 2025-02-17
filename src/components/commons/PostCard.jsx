import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdFavorite, MdFavoriteBorder, MdChatBubbleOutline, MdOutlinePerson } from 'react-icons/md';
import AuthContext from '@/contexts/auth/auth.context';
import { getLikes, getComments, getAuthorName } from '@libs/api/supabase.api';
import formatDate from '@/libs/utils/formatDate';

export default function PostCard({ postData }) {
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
        alert('Error fetching data:', error);
      }
    }
    fetchData();
  }, [postData]);

  const isLikeActive = likes.some((likeMeta) => likeMeta.user_id === id);

  return (
    <StPostContainer to={`/code/view/${postData.id}`}>
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
            <StIconLabel>{comments.length}</StIconLabel>
          </div>
          <div>
            {isLikeActive ? <StActiveLikeIcon /> : <StNotActiveLikeIcon />}
            <StIconLabel>{likes.length}</StIconLabel>
          </div>
        </div>
      </StIconsContainer>
    </StPostContainer>
  );
}

const StPostContainer = styled(Link)`
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
