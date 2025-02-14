import React from 'react';
import { styled } from 'styled-components';
import HomeFilter from '@pages/home/HomeFilter';

export default function MainPage() {
  return (
    <StMainContainer>
      <HomeFilter />
    </StMainContainer>
  );
}

const StMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
