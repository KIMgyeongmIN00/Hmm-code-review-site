import styled from 'styled-components';

export default function HomeFilter() {
  return (
    <StFilterContainer>
      <p>HomeFilter1</p>
      <p>HomeFilter2</p>
      <p>HomeFilter3</p>
    </StFilterContainer>
  );
}

const StFilterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
`;
