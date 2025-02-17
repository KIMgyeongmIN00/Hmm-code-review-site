import styled from 'styled-components';
import PostAreaContainer from '@features/view-page/PostAreaContainer';
import CommentAreaContainer from '@features/view-page/CommentAreaContainer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPostById } from '@/libs/api/post.api';
import { useContext } from 'react';
import AuthContext from '@/contexts/auth/auth.context';

export default function ViewPage() {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);

  const [comments, setComments] = useState([]);
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    async function fetchPostInfo() {
      const data = await getPostById(id, auth.id);
      setPostInfo(data);
      setComments(data.comments);
    }
    fetchPostInfo();
  }, [auth.id, id]);

  function onSubmitCommentsHandler(comment) {
    setComments((prev) => prev.concat({ ...comment, authorId: auth.id, author: auth.nickname }));
  }

  function onDeleteCommentsHandler(commentId) {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  }

  return (
    <StViewPageContainer>
      <PostAreaContainer postInfo={postInfo} />
      <CommentAreaContainer
        onSubmit={onSubmitCommentsHandler}
        onDelete={onDeleteCommentsHandler}
        comments={comments}
        auth={auth}
        postId={id}
      />
    </StViewPageContainer>
  );
}

const StViewPageContainer = styled.main`
  border: 1px solid var(--color-border);
  border-radius: var(--round-md);
  background-color: var(--color-white);
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  gap: 18px;
  max-width: 1200px;
  font-size: var(--font-size-md);
`;
