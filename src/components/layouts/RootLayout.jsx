import { Outlet } from 'react-router-dom';
import Header from '@layouts/header/Header';
import styled from 'styled-components';

export default function RootLayout() {
  return (
    <>
      <Header />
      <StOutletWrapper>
        <Outlet />
      </StOutletWrapper>
    </>
  );
}

const StOutletWrapper = styled.div`
  max-width: var(--width-max);
  margin: auto;
  padding: 20px 30px;
  box-sizing: border-box;
  & > * {
    box-sizing: border-box;
  }
`;
