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
    padding: 4rem 2rem;
  }

  @media (max-width: 500px) {
    padding: 4rem 1rem;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  grid-auto-rows: 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const LookItem = styled.div`
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease forwards;

  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: "";
    display: block;
    padding-top: 0;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
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

export const MasonryWrapper = styled.div`
  .masonry-grid {
    display: flex;
    width: 100%;
    margin-left: -1.5rem; /* Adjust for the gutter */
  }

  .masonry-grid_column {
    padding-left: 1.5rem; /* Gutter size */
    background-clip: padding-box;
  }

  .masonry-grid_column > div {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 500px) {
    .masonry-grid {
      margin-left: 0; /* Remove negative margin on mobile */
    }

    .masonry-grid_column {
      padding-left: 0; /* Remove padding on mobile */
    }

    /* Ensure the container fills available width */
    width: 100%;
  }
`;
