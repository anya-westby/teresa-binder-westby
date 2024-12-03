import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  darkGreen: "#2F4F4F",
  lightGreen: "#90A974",
  sage: "#B7C4A7",
  cream: "#F5F5F1",
  charcoal: "#2C2C2C",
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;
    width: 100%;
  }

  body {
   margin: 0 !important;     
   padding: 0;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    position: relative;    box-sizing: border-box;

}
  

  #___gatsby, #gatsby-focus-wrapper {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

export const Header = styled.span`
  color: ${theme.sage};
  font-family: "Montserrat", sans-serif !important;
  font-weight: 400;
  font-optical-sizing: auto;
  font-size: 5rem;
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
