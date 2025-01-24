import styled, { keyframes } from "styled-components";
import { theme } from "../../styledComponents/globals";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  animation: ${slideUp} 0.8s ease-out forwards;
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  font-size: 5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 6rem;
  color: ${theme.cream};
  @media (max-width: 768px) {
    font-size: 4rem;
    margin-bottom: 3rem;
    letter-spacing: -1px;
    text-align: center;
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    outline: none;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  ${ContactLink}:hover & {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    color: white;
    width: 24px;
    height: 24px;
  }
`;

export const Label = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.875rem;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
`;

export const Value = styled.p`
  color: white;
  font-size: 1.25rem;
  font-weight: 300;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 400;
`;
