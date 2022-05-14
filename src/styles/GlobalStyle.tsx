import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  li {
    list-style: none;
  }
  button {
    cursor: pointer;
    outline: none;
  }
  input, textarea {
    outline: none;
  }
`;

export default GlobalStyle;
