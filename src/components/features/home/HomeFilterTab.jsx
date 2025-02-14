import styled from 'styled-components';

export default function HomeFilterTab() {
  return (
    <StFilterContainer>
      <p>HomeFilter1</p>
      <p>HomeFilter2</p>
      <input type="radio"></input>
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
  gap: 20px;
`;
