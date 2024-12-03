import styled, { keyframes } from "styled-components";

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
  font-size: 8rem;
  font-weight: 300;
  color: white;
  margin-bottom: 4rem;
  letter-spacing: -2px;
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
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
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
`;

export const Value = styled.p`
  color: white;
  font-size: 1.25rem;
  font-weight: 300;
`;
