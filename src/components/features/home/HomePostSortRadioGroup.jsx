import { useState } from 'react';
import styled from 'styled-components';

export default function HomePostSortRadioGroup({ sort, setSort }) {
  return (
    <StRadioGroupContainer>
      <input
        id={sortConstants.SORT_LATEST}
        name="sort"
        type="radio"
        value={sortConstants.SORT_LATEST}
        checked={sort === sortConstants.SORT_LATEST}
        onChange={(e) => setSort(e.target.value)}
      ></input>
      <label htmlFor={sortConstants.SORT_LATEST}>최신순</label>
      <input
        id={sortConstants.SORT_LIKE}
        name="sort"
        type="radio"
        value={sortConstants.SORT_LIKE}
        checked={sort === sortConstants.SORT_LIKE}
        onChange={(e) => setSort(e.target.value)}
      ></input>
      <label htmlFor={sortConstants.SORT_LIKE}>좋아요순</label>
      <input
        id={sortConstants.SORT_COMMENT}
        name="sort"
        type="radio"
        value={sortConstants.SORT_COMMENT}
        checked={sort === sortConstants.SORT_COMMENT}
        onChange={(e) => setSort(e.target.value)}
      ></input>
      <label htmlFor={sortConstants.SORT_COMMENT}>댓글순</label>
    </StRadioGroupContainer>
  );
}

const sortConstants = {
  SORT_LATEST: 'latest',
  SORT_LIKE: 'like',
  SORT_COMMENT: 'comment'
};

Object.freeze(sortConstants);

const StRadioGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--round-sm);
  margin: 0 20px 0 0;
  overflow: hidden;

  & > input {
    height: var(--height-md);
    display: none;
  }

  & > label {
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
  }

  & > input[type='radio']:checked + label {
    background-color: var(--color-point);
    color: var(--color-white);
  }
`;
