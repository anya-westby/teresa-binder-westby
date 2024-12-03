import * as React from 'react';
import { GlobalStyle } from './src/styledComponents/globals';

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);

export const onClientEntry = () => {
  // Ensure styles are loaded before first paint
  const style = document.createElement('style');
  style.innerHTML = `
    html, body {
      background: #0f0f0f !important;
      margin: 0;
      padding: 0;
    }
  `;
  document.head.appendChild(style);
};

export const onInitialClientRender = () => {
  // Force immediate repaint
  requestAnimationFrame(() => {
    const main = document.querySelector('#___gatsby');
    if (main) {
      main.style.display = 'none';
      main.offsetHeight; // Force reflow
      main.style.display = '';
    }
  });
};