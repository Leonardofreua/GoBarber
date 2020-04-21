import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url(
    'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap');

    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    html, body, #root {
      height: 100%;
    }

    body, input button {
      font: 14px 'Roboto', sans-serif;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    button {
      cursor: pointer;
    }
`;
