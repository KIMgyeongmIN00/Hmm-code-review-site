import styled from 'styled-components';
import HomeRadioButton from '@features/home/HomeRadioButton';
import SelectBox from '@/components/commons/SelectBox';

export default function HomeFilterTab() {
  return (
    <StFilterContainer>
      <StFilterSelectBox />
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

const StFilterSelectBox = styled(SelectBox)``;
