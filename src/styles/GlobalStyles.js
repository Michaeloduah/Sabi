// This code is used to generate the global styles required in the entire codebase

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --color-box-shadow: rgb(69, 69, 69);
  --color-main: #11212f;
  --color-main-200: #414d59;
  --color-main-300: #58646d;
  --color-main-400: #0a141c;
  --color-main-500: #091118;
  --color-main-700: #050a0e;
  --color-secondary: #b3d749;
  --color-hover-state: #d91c71;
  --color-off-white: #ffffff;
  --color-contrast-100:  #8338ec06;
  --color-white: #ffffff;
  --color-white-200: #fffff3;
  --color-off-white: #ececec;
  --color-black: #000000;
  --color-gray-50: rgb(69, 69, 69, .5);

  /* LINE HEIGHT */
  --normal: 1.5;
  --input: 3.2rem;

  /* BORDER */
//   --border-sm: 0.3px solid var();


  /* GENERAL SHADOW EFFECT */
  --shadow-sm: 0px -1.5px 0.5px 1.5px var(--color-box-shadow);
  --shadow-md: 0px -3px 1px 2.5px var(--color-box-shadow);
  --shadow-lg: 0 24px 32px rgba(0, 0, 0, 0.12);
}

*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: transparent;
    transition: color 0.3s, background-color 0.3s;
}

button {
    cursor: pointer;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  background-color: inherit;
}

input,
input:focus,
select:focus,
textarea:focus{
    outline: none
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

::selection {
  color: var(--color-white);
  background-color: var(--color-main);
}


}

`;

export default GlobalStyles;
