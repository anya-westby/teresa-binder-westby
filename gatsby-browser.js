// gatsby-browser.js
export const onClientEntry = () => {
    // Prevent FOUC (Flash of Unstyled Content)
    const style = document.createElement('style')
    style.innerHTML = `
      #gatsby-focus-wrapper {
        opacity: 0;
        transition: opacity 0.3s;
      }
      .ready #gatsby-focus-wrapper {
        opacity: 1;
      }
    `
    document.head.appendChild(style)
  }
  
  export const onInitialClientRender = () => {
    requestAnimationFrame(() => {
      document.documentElement.classList.add('ready')
    })
  }