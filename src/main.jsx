import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './styles/GlobalStyle.jsx';
import AuthProvider from './contexts/auth/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
