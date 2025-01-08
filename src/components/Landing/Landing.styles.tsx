import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";
import { theme } from "../../styledComponents/globals";

export const landingTheme = {
  background: "#0f0f0f",
  text: "#ffffff",
  accent: "#FF3366",
  secondary: "#6B7280",
  overlay: "rgba(15, 15, 15, 0.8)",
};

export const fadeUp = keyframes`
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeScale = keyframes`
  from { 
    opacity: 0;
    transform: scale(0.9);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  position: relative;
  background: ${landingTheme.background};
  background-image: radial-gradient(
      circle at top right,
      rgba(0, 80, 0, 0.3),
      transparent 70%
    ),
    radial-gradient(circle at bottom left, rgba(0, 0, 0, 0.7), transparent 70%);
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
`;

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  display: flex;
  position: relative;
  z-index: 1;
  padding: 2rem;
  gap: 4rem;
  max-width: 1800px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 3rem 1.5rem;
    gap: 2rem;
    order: 1;
  }
`;

export const IntroSection = styled(Section)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  gap: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(
      to top,
      ${landingTheme.background},
      transparent
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    gap: 0;
  }
`;

export const ImageContainer = styled.div<{ isLeft: boolean; delay?: number }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateX(${(props) => (props.isLeft ? "-10%" : "10%")});
  animation: ${fadeScale} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: ${(props) => props.delay || 0}s;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    transform: translateY(-5%);
    order: 2;
  }
`;
export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
  filter: brightness(0.9);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    transform: scale(1.02);
    filter: brightness(1.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

export const ContentContainer = styled.div<{ isLeft: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.isLeft ? "flex-start" : "flex-end")};
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    align-items: center;
    text-align: center;
    order: 1;
  }
`;

export const Title = styled.h2<{ delay?: number }>`
  font-family: "Montserrat", sans-serif !important;
  font-weight: 400;
  font-optical-sizing: auto;
  font-size: 5rem;
  font-weight: 200;
  color: ${theme.cream};
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
  opacity: 0;
  animation: ${fadeUp} 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: ${(props) => props.delay || 0}s;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Description = styled.h2<{ isLeft?: boolean; delay?: number }>`
  font-family: "DM Sans", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 5px;
  line-height: 25px;
  font-weight: 200;
  color: ${theme.cream};
  text-transform: uppercase;
  margin: 1rem 0;
  max-width: 400px;
  text-align: ${(props) => (props.isLeft ? "left" : "right")};
  opacity: 0;
  animation: ${fadeUp} 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: ${(props) => props.delay || 0.2}s;
  will-change: transform, opacity;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.1rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${landingTheme.text};
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${landingTheme.accent};
    transition: width 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover {
    color: ${landingTheme.accent};

    &::after {
      width: 100%;
    }
  }
`;
