import React from 'react';
import { GlobalStyle } from './src/styledComponents/globals';

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);