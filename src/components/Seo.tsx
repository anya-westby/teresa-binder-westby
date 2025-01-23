// Create a new file: src/components/Seo.tsx
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const Head = () => {
  return (
    <>
      <title>Teresa Binder Westby</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>{`
        html, body, #___gatsby {
          background: rgb(15, 15, 15) !important;
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }
      `}</style>
    </>
  );
};
