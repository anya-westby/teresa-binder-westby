import * as React from "react";
import { GlobalStyle } from "../styledComponents/globals";
import { useEffect, useState } from "react";
import { Loading } from "./Landing/Loading";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle />
      {isLoading ? <Loading /> : <main>{children}</main>}
    </>
  );
};

export default Layout;
