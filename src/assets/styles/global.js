import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`

:root {
  --gray: #999999;
  --red: #ed0000;
  --red1: #4d0002;
  --black: #191919;
  --black1: #222222;
  --black2: #a2a2a2;
}

*, *:after, *:before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Mukta', sans-serif;
}

.video {
  height: 100%;
}

body,
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: var(--black);

  @media (max-width: 1080px) {
    font-size: 93.75%
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--red);
  outline: 1px solid var(--red);
}

a, a:hover {
  text-decoration: none;
  color: white;
}

section {
  width: 95%;
  margin: 0 auto;
  max-width: 1440px;

  @media (max-width: 600px) {
    width: 90%;
  }
}

`;

export default GlobalStyle;
