import { styled } from 'styled-components';
import HomeFilterTab from '@features/home/HomeFilterTab';
import HomePost from '@features/home/HomePost';

export default function HomePage() {
  return (
    <StHomePageContainer>
      <HomeFilterTab />
      <HomePost />
    </StHomePageContainer>
  );
}
const StHomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
