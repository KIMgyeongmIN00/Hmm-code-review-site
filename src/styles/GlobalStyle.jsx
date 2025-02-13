import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --color-main: #495057;
    --color-main-light: #9fa3a7;
    --color-main-dark: #272a2d;
    --color-point: #dec0ff;
    --color-point-light: #f5eaff;
    --color-point-dark: #b699d6;
    --color-border: #b076f0;

    --round-sm: 4px;
    --round-md: 6px;
    --round-lg: 12px;
    --round-xl: 20px;
  }
  }
`;

export default GlobalStyle;
