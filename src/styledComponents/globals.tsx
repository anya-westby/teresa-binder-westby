import styled, { createGlobalStyle, keyframes } from "styled-components";

const fadeUp = keyframes`
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    padding: 0;
    margin: 0;
    transform: translateY(0);
  }
`;

export const theme = {
  darkGreen: "#2F4F4F",
  lightGreen: "#90A974",
  sage: "#B7C4A7",
  cream: "#F5F5F1",
  charcoal: "#2C2C2C",
};
export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    background: #000000;
    color: #ffffff;
  }
  
  html, body {
    background: #0f0f0f !important;
    color: #ffffff;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Montserrat', sans-serif;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100vh;
    width: 100%;
  }

  /* Add this to ensure content fades in smoothly */
  #gatsby-focus-wrapper {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  ::selection {
    background: ${theme.sage};
    color: #0f0f0f;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(183, 196, 167, 0.4) transparent;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(183, 196, 167, 0.35);
    border-radius: 9999px;

    &:hover {
      background: rgba(183, 196, 167, 0.6);
    }
  }
`;

export const Header = styled.h1`
  color: ${theme.sage};
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  font-size: 5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0;
  animation: ${fadeUp} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;

  @media (max-width: 768px) {
    font-size: 4rem;
    text-align: center;
  }
`;

export const Subtext = styled.h2`
  font-family: "DM Sans", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 10px;
  text-transform: uppercase;
  font-weight: 200;
  color: ${theme.cream};
  text-align: center;
  opacity: 0;
  animation: ${fadeUp} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards 0.3s;

  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 8px;
  }
`;
// New additions for the portfolio page
export const ScrollContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  position: relative;

  & > * {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

interface FadeInElementProps {
  delay?: string;
}

export const FadeInElement = styled.div<FadeInElementProps>`
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;
