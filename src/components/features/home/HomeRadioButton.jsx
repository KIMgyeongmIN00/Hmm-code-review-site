import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function HomeRadioButton() {
  const [sort, setSort] = useState('latest');

  const sortChanged = function (e) {
    setSort(e.target.value);
  };

  return (
    <StRadioContainer>
      <StRadioButton
        id="latest"
        name="sort"
        type="radio"
        value="latest"
        checked={sort === 'latest'}
        onChange={sortChanged}
      ></StRadioButton>
      <StRadioLabel htmlFor="latest">최신순</StRadioLabel>
      <StRadioButton
        id="like"
        name="sort"
        type="radio"
        value="like"
        checked={sort === 'like'}
        onChange={sortChanged}
      ></StRadioButton>
      <StRadioLabel htmlFor="like">좋아요순</StRadioLabel>
      <StRadioButton
        id="comment"
        name="sort"
        type="radio"
        value="comment"
        checked={sort === 'comment'}
        onChange={sortChanged}
      ></StRadioButton>
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

const StRadioLabel = styled.label`
  ${StRadioButton}:checked + & {
    background-color: #d1d5da;
    color: #333;
    font-weight: 700;
  }
`;
