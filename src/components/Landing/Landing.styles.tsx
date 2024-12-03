import styled from "styled-components";
import { Link } from "gatsby";
import { theme } from "../../styledComponents/globals";

export const ScrollContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  position: relative;
  box-sizing: border-box;
  background: ${theme.charcoal};

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${theme.charcoal} 0%,
      ${theme.darkGreen} 35%,
      ${theme.sage} 65%,
      ${theme.charcoal} 100%
    );
    opacity: 0.7;
    z-index: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    scroll-snap-type: y proximity;
  }
`;

export const IntroSection = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  padding: 2rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Section = styled.section`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  display: flex;
  position: relative;
  z-index: 1;
  padding: 2rem;
  gap: 2rem;
  margin: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 4rem 1rem;
    gap: 1rem;
  }
`;

export const ImageContainer = styled.div<{ isLeft: boolean }>`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isLeft ? "flex-end" : "flex-start")};
  opacity: 0;
  box-sizing: border-box;

  transform: translateX(${(props) => (props.isLeft ? "-10%" : "10%")});
  animation: fadeSlide 1s ease-out forwards;

  @media (max-width: 768px) {
    justify-content: center;
    transform: translateY(-10%);
    order: 1;
  }

  @keyframes fadeSlide {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    @keyframes fadeSlide {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

export const StyledImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    margin: 0 !important;
  }
`;

export const ContentContainer = styled.div<{ isLeft: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.isLeft ? "flex-start" : "flex-end")};
  padding: 4rem;
  color: ${theme.cream};
  position: relative;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    align-items: center;
    text-align: center;
    order: 2;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.2) 0%,
      transparent 70%
    );
    z-index: -1;
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.8s ease-out forwards;
  color: ${theme.cream};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }

  @keyframes fadeUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Description = styled.p<{ isLeft?: boolean }>`
  font-family: "DM Sans", sans-serif;
  font-size: 1.2rem;
  color: ${theme.sage};
  margin: 1rem 0;
  max-width: 400px;
  text-align: ${(props) => (props.isLeft ? "left" : "right")};
  opacity: 0;
  animation: fadeUp 0.8s ease-out forwards 0.2s;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
    max-width: 100%;
    padding: 0 1rem;
  }
`;

export const NavigationLink = styled(Link)`
  font-family: "DMSans-ExtraLight", sans-serif;
  font-size: 2rem;
  color: ${theme.cream};
  text-decoration: none;
  position: relative;
  margin: 1rem 0;
  letter-spacing: 3px;
  font-weight: 200;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${theme.cream};
    transition: width 0.3s ease;

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover {
    color: ${theme.lightGreen};
    transform: translateX(10px);

    @media (max-width: 768px) {
      transform: translateX(0);
    }

    &::after {
      width: 100%;
      background-color: ${theme.lightGreen};
    }
  }
`;
