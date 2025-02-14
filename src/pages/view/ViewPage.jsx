import React from 'react';
import styled from 'styled-components';
import PostAreaContainer from '../../components/features/view-page/PostAreaContainer';
import CommentAreaContainer from '../../components/features/view-page/CommentAreaContainer';

export default function ViewPage() {
  return (
    <StViewPageContainer>
      <PostAreaContainer />
      <CommentAreaContainer />
    </StViewPageContainer>
  );
}

const StViewPageContainer = styled.main`
  border: 3px solid black;
  padding: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  gap: 18px;
`;
