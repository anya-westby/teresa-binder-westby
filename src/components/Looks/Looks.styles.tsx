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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 90%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
  max-width: 100%;

  img {
    max-height: calc(80vh - 80px);
    max-width: 100%;
    object-fit: contain;
    border-radius: 4px;
  }
`;

export const ModalCaption = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 15px 20px;
  color: white;
  border-radius: 0 0 4px 4px;
  width: 100%;
  text-align: center;

  h3 {
    margin: 0 0 5px 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    color: white;
  }

  p {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
`;

export const SlideNavButton = styled.button<{
  left?: boolean;
  right?: boolean;
}>`
  position: absolute;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
  opacity: 0.7;
  transition: opacity 0.3s;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }

  ${(props) =>
    props.left &&
    `
    left: 0;
  `}

  ${(props) =>
    props.right &&
    `
    right: 0;
  `}
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
  }
`;

export const ModalCounter = styled.div`
  position: absolute;
  bottom: -30px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
`;
