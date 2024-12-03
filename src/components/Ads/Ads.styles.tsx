// Ads.styles.tsx
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
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 3rem;
  letter-spacing: -2px;
  color: white;
`;

export const VideoSection = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 0;
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 400px);
  aspect-ratio: 16/9;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2rem;
  padding-bottom: 2rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const AdTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  color: white;
`;

export const AdRole = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const Divider = styled.div`
  width: 3rem;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0.5rem 0;
`;

export const Year = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavigationButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;

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
`;
