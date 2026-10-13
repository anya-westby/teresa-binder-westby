import styled from "styled-components";
import { Rise, theme } from "../../styledComponents/globals";

export const Body = styled(Rise)`
  padding: 24px ${theme.gutter} 96px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 48px;
  align-items: start;
`;

export const Links = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: flex-start;
  min-width: 0;

  @media (max-width: 720px) {
    grid-column: auto;
  }
`;

export const BigLink = styled.a`
  font-family: ${theme.serif};
  font-weight: 300;
  font-size: clamp(32px, 5vw, 72px);
  line-height: 1.05;
  letter-spacing: -0.01em;
  display: inline-flex;
  align-items: center;
  gap: 20px;
  max-width: 100%;
  overflow-wrap: anywhere;
  border-bottom: 1px solid ${theme.ink};
  padding-bottom: 10px;
  transition: gap 0.35s, color 0.3s;

  svg {
    flex: 0 0 auto;
    transition: transform 0.35s;
  }

  &:hover {
    gap: 32px;
  }

  &:hover svg {
    transform: translateX(6px);
  }
`;

export const Blurb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 15px;
  line-height: 1.6;
  color: ${theme.muted};
  max-width: 36ch;

  p {
    margin: 0;
  }

  p:first-child {
    font-family: ${theme.serif};
    font-size: 26px;
    line-height: 1.25;
    color: ${theme.ink};
  }
`;
