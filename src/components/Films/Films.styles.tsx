import styled, { keyframes } from "styled-components";
import { Typography } from "@mui/material";
import { theme } from "../../styledComponents/globals";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  min-height: 100%;
  width: 100%;
  background: black;
  padding: 6rem;
  color: white;
`;

export const Title = styled.h1`
  font-size: 8rem;
  font-weight: 300;
  margin-bottom: 6rem;
  letter-spacing: -2px;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
  overflow-x: auto;
  padding-bottom: 1rem;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.active ? "white" : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) => (props.active ? "black" : "white")};
  font-size: 0.875rem;

  &:hover {
    background: ${(props) =>
      props.active ? "white" : "rgba(255, 255, 255, 0.2)"};
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
`;

export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  aspect-ratio: 3/4;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
  }

  ${GalleryItem}:hover & img {
    transform: scale(1.1);
  }
`;

export const ItemOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.5s ease;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

export const ContentWrapper = styled.div`
  transform: translateY(1rem);
  transition: transform 0.5s ease;

  ${GalleryItem}:hover & {
    transform: translateY(0);
  }
`;

export const ItemTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 300;
  margin-bottom: 0.75rem;
`;

export const ItemRole = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

export const YearContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Divider = styled.span`
  width: 3rem;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
`;

export const Year = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;
