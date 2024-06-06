import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  :root {
      /* Cores de Marcas */
      --primary: #03588C;
      --secondary: #B5DBE8;
      --tertiary: #048ABF;
      --background: #F0F2F0;
      --fonts: #012E40;


    /* Cores de Estados */
    --info: #2F80ED;
    --success: #27AE60;
    --warning: #E2B93B;
    --error: #EB5757;

    /* Tons de cinza */
    --gray-1: #333333;
    --gray-2: #4F4F4F;
    --gray-3: #828282;
    --gray-4: #BDBDBD;
    --gray-5: #E0E0E0;

    /* Tipografia */
    --font: 'Inter', sans-serif;

/* Tamanhos e alturas de linhas de cabeçalhos */
    --heading1: 3.5em;
    --heading1-line-height: 3.85em;
    h1 {
      font-size: var(--heading1);
      line-height: var(--heading1-line-height);
    }

    --heading2: 2.5em;
    --heading2-line-height: 2.75em;
    h2 {
      font-size: var(--heading2);
      line-height: var(--heading2-line-height);
    }

    --heading3: 1.75em;
    --heading3-line-height: 2em;
    h3 {
      font-size: var(--heading3);
      line-height: var(--heading3-line-height);
    }

    --heading4: 1.25em;
    --heading4-line-height: 1.5em;
    h4 {
      font-size: var(--heading4);
      line-height: var(--heading4-line-height);
    }

    --heading5: 1em;
    --heading5-line-height: 1.25em;
    h5 {
      font-size: var(--heading5);
      line-height: var(--heading5-line-height);
    }

    --heading6: 0.8em;
    --heading6-line-height: 1em;
    h6 {
      font-size: var(--heading6);
      line-height: var(--heading6-line-height);
    }
  }
/* Reset de estilo */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
/* Estiilos padrões */
  body {
    background-color: var(--background);
    font-family: var(--font);
    color: var(--fonts);
  }

  /* Estilos padrões de input */
  input {
    padding: 0.5rem;
    border: 1px solid var(--gray-4);
    border-radius: 4px;
    font-size: 1rem;
    color: var(--fonts);
    background-color: white;
    transition: border-color 0.3s ease-in-out;
  }

  input:focus {
    outline: none;
    border-color: var(--primary);
  }
  input:hover {
    border-color: var(--primary);
  }

  input.error {
    border-color: var(--error);
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    font-weight: 600;
  }
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    color: white;
    background-color: var(--primary);
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
    }

    button:hover {
    background-color: var(--secondary);
    color: var(--fonts);
    }

    button:disabled {
    background-color: var(--gray-4);
    cursor: not-allowed;
    }

`;

export default GlobalStyles;