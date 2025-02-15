import { styled } from 'styled-components';
import HomeLanguageSelector from '@features/home/HomeLanguageSelector';
import HomePostSortRadioGroup from '@features/home/HomePostSortRadioGroup';
import HomePost from '@features/home/HomePost';

export default function HomePage() {
  let postList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <StHomePageContainer>
      <StFilterPanelContainer>
        <HomeLanguageSelector />
        <HomePostSortRadioGroup />
      </StFilterPanelContainer>
      {postList.map((post) => (
        <HomePost />
      ))}
    </StHomePageContainer>
  );
}
const StHomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const StFilterPanelContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  gap: 20px;
`;
