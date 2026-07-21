import styled, { keyframes } from "styled-components";
import { Typography } from "@mui/material";
import { theme } from "../../styledComponents/globals";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  width: 100%;
  background: #0f0f0f;
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

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    justify-content: center;
    padding-bottom: 0.5rem;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.active ? "white" : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) => (props.active ? "black" : "white")};
  font-size: 0.875rem;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  &:hover {
    background: ${(props) =>
      props.active ? "white" : "rgba(255, 255, 255, 0.2)"};
  }
`;

export const SectionHeader = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 2.5rem;
  color: white;
  margin: 4rem 0 2rem;
  letter-spacing: 0.5px;

  &:first-of-type {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 3rem 0 1.5rem;
    text-align: center;
  }
`;

export const SectionHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 6rem 0 3rem;
  width: 100%;

  &:first-of-type {
    margin-top: 3rem;
  }
`;

export const SectionHeaderLine = styled.div`
  flex: 1;
  height: 1px;
  background: linear-gradient(
    to var(--direction, right),
    transparent,
    rgba(255, 255, 255, 0.3)
  );

  &:first-child {
    --direction: right;
  }

  &:last-child {
    --direction: left;
  }
`;

export const SectionHeaderContent = styled.div`
  padding: 0 2rem;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: 0.5rem;
  }

  &::after {
    right: 0.5rem;
  }
`;

export const SectionHeaderText = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 2.5rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0;
  padding: 0 1rem;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 2px;
    white-space: normal;
  }
`;

// Update the margin on GalleryGrid
export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: 768px) {
    aspect-ratio: 2/3;
  }
`;

export const ItemOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(0, 0, 0, 0.8) 30%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.1) 100%
  );
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 0.5s ease;

  @media (max-width: 768px) {
    opacity: 1;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    padding: 1.5rem;
  }

  ${GalleryItem}:hover & {
    opacity: 1.5;
  }
`;

export const ContentWrapper = styled.div`
  transform: translateY(1rem);
  transition: transform 0.5s ease;

  ${GalleryItem}:hover & {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    transform: translateY(0);
  }
`;

export const ItemTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.875rem;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const ItemRole = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.125rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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

  @media (max-width: 768px) {
    width: 2rem;
  }
`;

export const Year = styled.span`
  font-family: "Montserrat", sans-serif;
  color: rgba(255, 255, 255, 0.5);
`;
