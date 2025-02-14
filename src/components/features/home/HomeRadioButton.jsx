import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function HomeRadioButton() {
  const [sort, setSort] = useState('latest');

  return (
    <StRadioContainer>
      <StRadioButton
        id={sortConstants.SORT_LATEST}
        name="sort"
        type="radio"
        value={sortConstants.SORT_LATEST}
        checked={sort === sortConstants.SORT_LATEST}
        onChange={(e) => setSort(e.target.value)}
      ></StRadioButton>
      <StRadioLabel htmlFor={sortConstants.SORT_LATEST}>최신순</StRadioLabel>
      <StRadioButton
        id={sortConstants.SORT_LIKE}
        name="sort"
        type="radio"
        value={sortConstants.SORT_LIKE}
        checked={sort === sortConstants.SORT_LIKE}
        onChange={(e) => setSort(e.target.value)}
      ></StRadioButton>
      <StRadioLabel htmlFor={sortConstants.SORT_LIKE}>좋아요순</StRadioLabel>
      <StRadioButton
        id={sortConstants.SORT_COMMENT}
        name="sort"
        type="radio"
        value={sortConstants.SORT_COMMENT}
        checked={sort === sortConstants.SORT_COMMENT}
        onChange={(e) => setSort(e.target.value)}
      ></StRadioButton>
      <StRadioLabel htmlFor={sortConstants.SORT_COMMENT}>댓글순</StRadioLabel>
    </StRadioContainer>
  );
}

const sortConstants = {
  SORT_LATEST: 'latest',
  SORT_LIKE: 'like',
  SORT_COMMENT: 'comment'
};

const StRadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--round-sm);
  margin: 0 20px 0 0;
  overflow: hidden;
`;

const StRadioButton = styled.input`
  height: var(--height-md);
  display: none;
`;

const StRadioLabel = styled.label`
  display: flex;
  width: 45px;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);

  padding: 10px 10px;
  cursor: pointer;

  &:not(:last-of-type) {
    border-right: 1px solid var(--color-border);
  }

  &:hover {
    background-color: var(--color-hover);
  }

  ${StRadioButton}:checked + & {
    background-color: var(--color-point);
    color: var(--color-main);
  }
`;
