import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  darkGreen: "#2F4F4F",
  lightGreen: "#90A974",
  sage: "#B7C4A7",
  cream: "#F5F5F1",
  charcoal: "#2C2C2C",
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Migra-Extrabold';
    src: url('./assets/fonts/Migra-Extrabold.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }

  html {
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    font-family: 'DMSans-ExtraLight', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #000000;
    color: #f6f6f6;
    height: 100%;
    width: 100%;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Custom Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(85, 3, 98, 0.5);
    border-radius: 4px;
    &:hover {
      background: rgba(85, 3, 98, 0.8);
    }
  }

  /* Enable smooth scrolling for supported browsers */
  @media screen and (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  /* Ensure proper touch handling on mobile */
  @supports (-webkit-touch-callout: none) {
    .scroll-container {
      -webkit-overflow-scrolling: touch;
    }
  }
`;

export const Header = styled.span`
  color: ${theme.sage};
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-size: 5rem;
  font-weight: 700;
  font-style: bold;
  font-variation-settings: "SOFT" 0, "WONK" 0;
  letter-spacing: 1px;
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Subtext = styled.span`
  font-family: "DM Sans", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 3px;
  font-weight: 200;
  color: ${theme.cream};
  text-align: center;
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards 0.2s;
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
  min-height: 100vh;
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
