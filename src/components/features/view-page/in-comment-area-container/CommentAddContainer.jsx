import { MdOutlinePerson } from 'react-icons/md';
import Button from '@commons/Button';
import styled from 'styled-components';

export default function CommentAddContainer() {
  return (
    <StCommentAddContainer>
      <StCommentAdderWrapper>
        <StPersonIcon size={30} />
        <h3>당신의 닉네임</h3>
      </StCommentAdderWrapper>
      <StInput type="text" placeholder="댓글 달기!" />
      <StCommentAddButton $variant="solid" $size="lg" $color="point">
        댓글 추가하기
      </StCommentAddButton>
    </StCommentAddContainer>
  );
}

const StCommentAddContainer = styled.div`
  /* box-shadow: 0px 0px 8px var(--color-main-light); */
  border: 1px solid var(--color-border);
  border-radius: var(--round-md);
  background-color: var(--color-point-light);
  margin: 14px 20px;
  display: grid;
  grid-template-rows: 60px minmax(60px, auto) auto;
  grid-template-columns: minmax(1fr, auto) repeat(7, 1fr) minmax(auto, auto);
  gap: 8px;
`;

const StInput = styled.textarea`
  grid-area: 2/1/3/10;
  resize: none;
  min-height: 60px;
  background-color: var(--color-white);
  border: none;
  border-radius: var(--round-md);
  text-align: start;
  justify-content: center;
  padding: 18px 16px 18px 16px;
  margin: 0px 12px 0px 12px;
`;

const StCommentAddButton = styled(Button)`
  grid-area: 3/9/3/9;
  margin: 10px 10px 10px 10px;
`;

const StCommentAdderWrapper = styled.div`
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
