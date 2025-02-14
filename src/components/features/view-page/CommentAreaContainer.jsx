import Button from '@commons/Button';
import { MdFavoriteBorder, MdOutlineAddComment } from 'react-icons/md';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';
import Input from '@commons/Input';

export default function CommentAreaContainer() {
  return (
    <StCommentAreaContainer>
      <StCommentListContainer>
        <StCommentWriterWrapper>
          <CgProfile size={30} />
          <h3>댓글 작성자</h3>
        </StCommentWriterWrapper>
        <StCommentContentWrapper>
          <p>괜찮습니다!길어져도 괜찮습니다!길어져도 괜찮습니다!길어져도 괜찮습니다!</p>
        </StCommentContentWrapper>
        <StCommentEditButtonContainer>
          <StButton $size="sm" $variant="solid" $color="point">
            <FaEdit />
          </StButton>
          <StButton $size="sm" $variant="solid" $color="point">
            <FaTrashAlt />
          </StButton>
        </StCommentEditButtonContainer>
        <StCommentLikeContainer>
          <StButton $variant="ghost" $size="md" $round="xl">
            <MdFavoriteBorder />
          </StButton>
          <p>좋아요 수</p>
        </StCommentLikeContainer>
      </StCommentListContainer>
      <StCommentAddContainer>
        <StCommentInput type="text" />
        <StCommentAddButton $variant="solid" $size="lg" $color="point">
          댓글 입력 버튼
        </StCommentAddButton>
      </StCommentAddContainer>
    </StCommentAreaContainer>
  );
}

const StCommentAreaContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 28px;
`;

const StCommentListContainer = styled.div`
  box-shadow: 0px 0px 8px var(--color-main-light);
  border-radius: var(--round-xl);
  background-color: var(--color-point);
  margin: 14px 20px;
  display: grid;
  grid-template-rows: 60px minmax(60px, auto) 1fr;
  grid-template-columns: repeat(9, 1fr);
  gap: 8px;
`;

const StCommentWriterWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  justify-self: end;

  & > h3 {
    margin-bottom: -5px;
  }
`;

const StCommentContentWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 10;
  background-color: var(--color-point-light);
  border-radius: var(--round-lg);
  text-align: center;
  justify-content: center;
  padding: 18px 24px 18px 24px;
  margin: 0px 12px 0px 12px;
`;

const StCommentEditButtonContainer = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  column-gap: 6px;
  padding: 10px 10px 10px 10px;
  width: fit-content;
  grid-area: 3/8/4/9;
  justify-self: end;
`;

const StCommentLikeContainer = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  padding: 10px 10px 10px 10px;
  width: fit-content;
  grid-area: 3/9/4/10;
  justify-self: end;
`;

const StButton = styled(Button)`
  width: 38px;
  height: 38px;
  color: black;
`;

const StCommentAddContainer = styled.div`
  border: 1px solid green;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px;
`;

const StCommentInput = styled(Input)``;

const StCommentAddButton = styled(Button)`
  height: 52px;
`;
