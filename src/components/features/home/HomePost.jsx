import styled from 'styled-components';

export default function HomePost() {
  return (
    <StHomePostContainer>
      <StPostTitle></StPostTitle>
    </StHomePostContainer>
  );
}

const StHomePostContainer = styled.div`
  border: 1px solid var(--color-border);
  border-radius: var(--round-md);
  height: 100px;
  width: 800px;
`;

const StPostTitle = styled.h2``;
