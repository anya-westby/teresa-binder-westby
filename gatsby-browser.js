// gatsby-browser.js
import "./src/styledComponents/typography.css";

export const onClientEntry = () => {
    // Add loading class to body
    if (typeof document !== 'undefined') {
      document.body.classList.add('loading');
    }
  }
  
  export const onInitialClientRender = () => {
    // Remove loading class after a small delay
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        document.body.classList.remove('loading');
      }
    }, 500);
  }