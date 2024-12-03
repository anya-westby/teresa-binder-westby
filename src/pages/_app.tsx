import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styledComponents/globals";
import React from "react";

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
