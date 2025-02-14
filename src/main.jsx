import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './styles/GlobalStyle.jsx';

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <GlobalStyle />
  <App />
 </StrictMode>
);
