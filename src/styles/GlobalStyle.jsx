import { createGlobalStyle } from "styled-components";
import { colors as c } from "../constants";

const GlobalStyle = createGlobalStyle`
  html, body {
  box-sizing: border-box;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  background-color: ${c.background};
}
*, *:before, *:after {
  box-sizing: inherit;
}

p {
  color: ${c.text};
}

h1 {
  font-size: 22.976px;
  line-height: 29px;
  color: ${c.title};
}
`;

export default GlobalStyle;
