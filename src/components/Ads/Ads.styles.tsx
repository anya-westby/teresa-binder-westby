import styled from "styled-components";
import { theme } from "../../styledComponents/globals";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: black;
  padding: 4rem 6rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    height: auto;
    min-height: 100vh;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 3rem;
  letter-spacing: -2px;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    letter-spacing: -1px;
  }
`;

export const VideoSection = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 0;
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */

  @media (max-width: 768px) {
    padding-top: 75%; /* Slightly taller on mobile for better visibility */
  }
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: stretch;
    margin-top: 1.5rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`;

export const AdTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const AdRole = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Divider = styled.div`
  width: 3rem;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    width: 2rem;
  }
`;

export const Year = styled.span`
  color: rgba(255, 255, 255, 0.5);
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

  @media (max-width: 768px) {
    min-width: 50px;
    font-size: 0.875rem;
  }
`;
