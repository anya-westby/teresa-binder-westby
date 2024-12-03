import * as React from 'react';

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <style
      key="critical-styles"
      dangerouslySetInnerHTML={{
        __html: `
          html, body {
            background: #0f0f0f !important;
            margin: 0;
            padding: 0;
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