import React from 'react';
import { styled } from 'styled-components';
import HomeFilterTab from '@features/home/HomeFilter';
import HomePost from '@features/home/HomePost';

export default function MainPage() {
  return (
    <StMainContainer>
      <HomeFilterTab />
      <HomePost />
    </StMainContainer>
  );
}

const StMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
