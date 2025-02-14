import styled from 'styled-components';
import HomeRadioButton from '@features/home/HomeRadioButton';
import SelectBox from '@/components/commons/SelectBox';

export default function HomeFilterTab() {
  return (
    <StFilterContainer>
      <StFilterSelectBox
        placeholder="언어 선택"
        options={[
          { id: 1, name: 'C++' },
          { id: 2, name: 'JavaScript' },
          { id: 3, name: 'Python' },
          { id: 4, name: 'Kotlin' },
          { id: 5, name: 'Java' }
        ]}
        size="sm"
      />
      <HomeRadioButton />
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

  background-color: green;
`;

const StFilterSelectBox = styled(SelectBox)`
  /* height: var(--height-md); */
`;
