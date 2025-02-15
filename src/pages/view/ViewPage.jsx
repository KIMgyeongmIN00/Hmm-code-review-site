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
  /* box-shadow: 0px 0px 12px var(--color-border); */
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
