import * as React from 'react';

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <style
    key="critical-styles"
    dangerouslySetInnerHTML={{
      __html: `
        html, body, #___gatsby, #gatsby-focus-wrapper {
          background: #0f0f0f !important;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          width: 100%;
        }
        
        .fade-enter {
          opacity: 0;
        }
        
        .fade-enter-active {
          opacity: 1;
          transition: opacity 300ms ease-in;
        }
      `
    }}
  />,
  ]);

  setPreBodyComponents([
    <script
      key="gatsby-preload-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            document.body.style.background = '#0f0f0f';
            document.documentElement.style.background = '#0f0f0f';
          })();
        `
      }}
    />,
  ]);
};