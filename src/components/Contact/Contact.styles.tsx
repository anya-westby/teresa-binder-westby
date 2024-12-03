import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.charcoal} 0%,
    ${(props) => props.theme.darkGreen} 40%,
    ${(props) => props.theme.charcoal} 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 3rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.8s ease forwards;
  border: 1px solid rgba(183, 196, 167, 0.1);
`;

export const Title = styled.h1`
  font-family: "Libre Caslon Display", serif;
  color: ${(props) => props.theme.cream};
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 2px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
  }

  .icon {
    color: ${(props) => props.theme.sage};
  }
`;

export const ContactText = styled.p`
  font-family: "DM Sans", sans-serif;
  letter-spacing: 1px;
  font-weight: 200;
  margin: 0;
`;
