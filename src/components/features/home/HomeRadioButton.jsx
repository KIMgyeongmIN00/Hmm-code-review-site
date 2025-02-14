import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function HomeRadioButton() {
  const [sort, setSort] = useState('latest');

  return (
    <StRadioContainer>
      <StRadioButton id="latest" type="radio"></StRadioButton>
      <StRadioLabel htmlFor="latest">최신순</StRadioLabel>
      <StRadioButton id="like" type="radio"></StRadioButton>
      <StRadioLabel htmlFor="like">좋아요순</StRadioLabel>
      <StRadioButton id="comment" type="radio"></StRadioButton>
      <StRadioLabel htmlFor="comment">댓글순</StRadioLabel>
    </StRadioContainer>
  );
}

const StRadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 20px 0 0;
  align-items: center;
`;

const StRadioButton = styled.input`
  height: var(--height-md);
  display: none;
`;

const StRadioLabel = styled.label``;
