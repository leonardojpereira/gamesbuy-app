import { createGlobalStyle } from "styled-components";
import 'typeface-roboto';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #162f44;
    position: relative;
    min-height: 100vh;
    outline: none;
  }

`;