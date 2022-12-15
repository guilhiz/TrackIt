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
  font-size: 23px;
  line-height: 29px;
  color: ${c.title};
}

button {
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  :active {
    scale: 0.9;
  }
}
`;

export default GlobalStyle;
