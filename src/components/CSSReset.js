import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
/* ===== Scrollbar ===== */
  * {
    scrollbar-width: auto;
    scrollbar-color: #8f54a0 #ffffff;
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #EBE6EF;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #520291;
    border-radius: 10px;
    border: 3px solid #EBE6EF;
  }
/* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
  }
  body {
    font-family: sans-serif;
    background-color: #DDC5F1;
  }
/* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
/* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;