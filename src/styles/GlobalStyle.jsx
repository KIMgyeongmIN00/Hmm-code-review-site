import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --color-main: #495057;
    --color-main-light: #9fa3a7;
    --color-main-dark: #272a2d;
    --color-point: #dec0ff;
    --color-point-light: #f5eaff;
    --color-point-dark: #b699d6;
    --color-border: #b2b9C0;
    --color-hover: #f5f5f5;

    --round-sm: 4px;
    --round-md: 6px;
    --round-lg: 12px;
    --round-xl: 20px;

    --height-sm: 20px;
    --height-md: 32px;
    --height-lg: 48px;

    --font-size-sm: 12px;
    --font-size-md: 16px;
    --font-size-lg: 24px;

  }

  a {
    display: inline-block;
    text-decoration: none;
  }
  
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyle;
