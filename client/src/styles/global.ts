import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    /* color: var(--color-text); */
  }
  
  body {
    background: var(--color-main);
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
    -ms-overflow-style: none;
    &::-webkit-scrollbar { width: 0; }
  }
 
  a { 
    color: inherit;
    text-decoration: none;
  } 
 
  body[data-theme='light'] {
    --color-main: #F0F8FF;
    --color-text: #282828;
    --color-accent: #32AAFF;
  }

  body[data-theme='dark'] {
    /* --color-main: #0A2540; */
    --color-main: #20232A;
    --color-text: #D6E3ED;
    --color-accent: #00B8D4;
  }

  body {
    --color-red: #EF505C;
    --color-green: #17C055;
  }
`
