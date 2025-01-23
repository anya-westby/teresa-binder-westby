import * as React from "react";
import { GlobalStyle } from "../styledComponents/globals";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <GlobalStyle />
      <main
        style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.3s ease" }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
