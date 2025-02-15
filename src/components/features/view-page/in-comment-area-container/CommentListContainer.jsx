import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import IconButton from '@/components/commons/IconButton';
import Button from '@commons/Button';
import styled from 'styled-components';

export default function CommentListContainer() {
  return (
    <StCommentListContainer>
      <StCommentWriterContainer>
        <CgProfile size={30} />
        <h3>댓글 작성자</h3>
      </StCommentWriterContainer>
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
        <StIconButton activeIcon={MdFavoriteBorder} inActiveIcon={MdFavorite} />
        <p>999</p>
      </StCommentLikeContainer>
    </StCommentListContainer>
  );
}

const StCommentListContainer = styled.div`
  /* box-shadow: 0px 0px 8px var(--color-main-light); */
  border: 1px solid var(--color-border);
  border-radius: var(--round-md);
  background-color: var(--color-point-light);
  margin: 14px 20px;
  display: grid;
  grid-template-rows: 60px minmax(60px, auto) 60px;
  grid-template-columns: minmax(1fr, auto) repeat(7, 1fr) minmax(auto, auto);
  gap: 8px;
`;

const StCommentWriterContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  justify-self: start;
  margin-left: 20px;

  & > h3 {
    margin-bottom: -5px;
  }
`;

const StCommentContentWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 10;
  background-color: var(--color-white);
  border-radius: var(--round-md);
  text-align: start;
  justify-content: center;
  padding: 18px 16px 18px 16px;
  margin: 0px 12px 0px 12px;
`;

const StCommentEditButtonContainer = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  column-gap: 6px;
  padding: 10px 10px 10px 10px;
  width: fit-content;
  grid-area: 1/9/2/9;
  justify-self: end;
`;

const StCommentLikeContainer = styled.div`
  padding: 0px 10px 10px 10px;
  grid-area: 3/9/4/10;
  justify-self: center;
  text-align: center;
`;

const StButton = styled(Button)`
  width: 38px;
  height: 38px;
  color: black;
  background-color: transparent;
  border: none;
`;

const StIconButton = styled(IconButton)`
  font-size: 28px;
  background-color: transparent;
  border: none;
  color: red;
  &:hover {
    background-color: transparent;
  }
`;
