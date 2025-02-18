import { MdOutlinePerson } from 'react-icons/md';
import IconButton from '@commons/IconButton';
import styled from 'styled-components';
import CommentOnAuthButtons from '@features/view-page/in-comment-area-container/CommentOnAuthButtons';

export default function CommentBoxContainer({ comment, authId, onDelete }) {
  return (
    <StCommentBoxContainer>
      <StCommentWriterContainer>
        <StPersonIcon size={30} />
        <h3>{comment.author}</h3>
      </StCommentWriterContainer>
      <StCommentContentWrapper>
        <p>{comment.content}</p>
      </StCommentContentWrapper>
      {comment.authorId === authId && <CommentOnAuthButtons onDelete={onDelete} />}
    </StCommentBoxContainer>
  );
}

const StCommentBoxContainer = styled.div`
  border: 1px solid var(--color-border);
  border-radius: var(--round-md);
  background-color: var(--color-point-light);
  margin: 14px 20px;
  display: grid;
  grid-template-rows: 60px minmax(60px, auto) 60px;
  grid-template-columns: 200px repeat(6, auto) 150px;
  gap: 8px;
`;

const StCommentWriterContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  justify-self: start;
  margin-left: 20px;

  & > h3 {
    margin-left: 5px;
    margin-bottom: -5px;
  }
`;

const StPersonIcon = styled(MdOutlinePerson)`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid var(--color-main-light);
  border-radius: var(--round-full);
`;

const StCommentContentWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 9;
  background-color: var(--color-white);
  border-radius: var(--round-md);
  text-align: start;
  justify-content: center;
  padding: 18px 16px 18px 16px;
  margin: 0px 12px 0px 12px;
`;

const StCommentLikeContainer = styled.div`
  padding: 0px 10px 10px 10px;
  grid-area: 3/8/4/9;
  justify-self: center;
  text-align: center;
`;

const StLikeButton = styled(IconButton)`
  font-size: 28px;
  background-color: var(--color-trans);
  border: none;
  color: var(--color-red);
  &:hover {
    background-color: var(--color-trans);
  }
`;
