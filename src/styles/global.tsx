import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 *,
*:before,
*:after {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    background: transparent;
    -webkit-tap-highlight-color: transparent;
}

html,
body,
#root {
    height: 100%;
}

body.dark {
    --primary: rgba(0,0,0,0.9);
    --secondary: rgba(128,128,128,.9);
    --txt: #F2F4F3;
    --bg: #2D3142;
    --grey: rgba(0, 0, 0, 0.1);
    --hover: rgba(0, 0, 0, 0.5);
    --alert: #d73a49;
    --confirm: #0e7945;
}

body,
input,
button,
code {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
}
`;

export default GlobalStyles;
