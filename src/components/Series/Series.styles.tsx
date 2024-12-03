import styled, { keyframes } from "styled-components";
import { Typography } from "@mui/material";
import { theme } from "../../styledComponents/globals";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SeriesPageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    ${theme.charcoal} 0%,
    ${theme.darkGreen} 40%,
    ${theme.charcoal} 100%
  );
  padding: 4rem 2rem;
  margin: 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  box-sizing: border-box;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeIn} 0.8s ease forwards;
`;

export const PageTitle = styled.span`
  font-family: "Playfair Display", serif;
  font-size: 4rem;
  font-weight: 700;
  font-style: bold;
  font-variation-settings: "SOFT" 0, "WONK" 0;
  letter-spacing: 1px;
  color: ${theme.cream} !important;
  margin-bottom: 2rem !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const SortControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const SortButton = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? theme.sage : "transparent")};
  color: ${(props) => (props.active ? theme.charcoal : theme.cream)};
  border: 2px solid ${theme.sage};
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "DM Sans", sans-serif;
  letter-spacing: 1px;
  font-weight: 200;

  &:hover {
    background: ${theme.sage};
    color: ${theme.charcoal};
  }
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1800px;
  margin: 0 auto;
  padding: 1rem;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 0.3s;
`;

export const ContentOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(100%);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const GalleryItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 2/3;
  background: ${theme.charcoal};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

    img {
      transform: scale(1.05);
    }

    ${ContentOverlay} {
      transform: translateY(0);
      background: rgba(0, 0, 0, 0.85);
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
`;

export const Title = styled(Typography)`
  font-family: "Migra-Extrabold", serif !important;
  font-size: 1.5rem !important;
  color: ${theme.cream} !important;
  margin-bottom: 0.5rem !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const Role = styled(Typography)`
  font-family: "DMSans-Regular", sans-serif !important;
  font-size: 1rem !important;
  color: ${theme.sage} !important;
  line-height: 1.4 !important;
`;

export const Year = styled(Typography)`
  font-family: "DMSans-Light", sans-serif !important;
  font-size: 0.9rem !important;
  color: ${theme.lightGreen} !important;
  margin-top: 0.5rem !important;
`;
