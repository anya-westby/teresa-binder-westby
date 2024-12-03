import * as React from "react";
import { GlobalStyle } from "../styledComponents/globals";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
};

export default Layout;
