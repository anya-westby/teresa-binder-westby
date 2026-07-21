// Ads.styles.js
import styled, { keyframes } from "styled-components";
import { theme } from "../../styledComponents/globals";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #0f0f0f;
  padding: 4rem 6rem;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
  }
`;

export const LeftSection = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 4rem;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    order: 1;
    padding-top: 2rem;
  }
`;

export const RightSection = styled.div`
  width: 67%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    order: 3;
    flex: 1;
    min-height: 0;
    position: relative;
    margin-top: 2rem;
  }
`;

export const Title = styled.span`
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: ${theme.sage};

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    letter-spacing: -1px;
    text-align: left;
  }
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(183, 196, 167, 0.2);
  border-radius: 8px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.5s ease;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    order: 2;
    gap: 1.5rem;
    margin-bottom: 2rem;
    justify-content: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: ${fadeIn} 0.5s ease;

  @media (max-width: 768px) {
    gap: 0.25rem;
    justify-content: center;
  }
`;

export const AdTitle = styled.h2`
  font-family: "Montserrat", sans-serif !important;
  font-weight: 400;
  font-size: 2rem;
  color: ${theme.cream};

  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: -1px;
    text-align: center;
  }
`;

export const AdRole = styled.p`
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  font-size: 1.5rem;
  color: ${theme.cream};

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const Divider = styled.div`
  width: 3rem;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    width: 2rem;
    align-self: center;
    margin: 0;
  }
`;

export const Year = styled.span`
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  font-size: 1rem;
  color: ${theme.lightGreen};
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`;

export const NavigationButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.875rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Counter = styled.span`
  color: rgba(255, 255, 255, 0.5);
  min-width: 60px;
  text-align: center;
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  font-size: 1rem;

  @media (max-width: 768px) {
    min-width: 50px;
    font-size: 0.875rem;
  }
`;
