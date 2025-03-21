import styled, { keyframes } from "styled-components";
import { theme } from "../../styledComponents/globals";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  width: 100%;
  background: black;
  padding: 4rem 6rem;
  color: white;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: ${theme.sage};

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 3rem;
    letter-spacing: -1px;
    text-align: center;
  }
`;

export const MosaicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: 350px;
  grid-auto-flow: dense;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 300px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 250px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
`;

export const LookItem = styled.div<{ span?: number }>`
  position: relative;
  overflow: hidden;
  grid-column: span ${(props) => props.span || 1};
  grid-row: span ${(props) => props.span || 1};
  animation: ${fadeIn} 0.8s ease forwards;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
  }

  ${LookItem}:hover & img {
    transform: scale(1.05);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 1.5rem;
  transform: translateY(100%);
  transition: transform 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${LookItem}:hover & {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    transform: translateY(0);
    padding: 1rem;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.5) 40%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

export const Caption = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SubCaption = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
