import React from 'react';
import { styled } from 'styled-components';
import HomeFilter from '@features/home/HomeFilter';
import HomePost from '@features/home/HomePost';

export default function MainPage() {
  return (
    <StMainContainer>
      <HomeFilter />
      <HomePost />
    </StMainContainer>
  );
}

const StMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
