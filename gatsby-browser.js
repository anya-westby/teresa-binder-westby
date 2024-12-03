import React from 'react';
import { GlobalStyle } from './src/styledComponents/globals';

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);

export const onClientEntry = () => {
  // Ensure immediate style application
  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      const mainElement = document.querySelector('#___gatsby');
      if (mainElement) {
        mainElement.style.opacity = '0';
        requestAnimationFrame(() => {
          mainElement.style.opacity = '1';
          mainElement.style.transition = 'opacity 0.1s';
        });
      }
    });
  });
};