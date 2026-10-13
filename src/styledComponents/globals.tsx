import * as React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

export const theme = {
  paper: "#F4EFE7",
  ink: "#1C1917",
  clay: "#8A3B2F",
  muted: "#5C534A",
  line: "#D8CFC2",
  hover: "#ECE4D8",
  tile: "#E6DDCF",
  footMuted: "#A79D91",
  footLine: "#3A3430",
  footLink: "#6B6259",
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'Karla', system-ui, sans-serif",
  gutter: "clamp(20px, 5vw, 72px)",
  ease: "cubic-bezier(.2,.7,.2,1)",
  easeInOut: "cubic-bezier(.65,0,.35,1)",
};

// Placeholder tones shown behind images while they load
export const tones = [
  "#7A6A58",
  "#5E6B5A",
  "#8A3B2F",
  "#4C5566",
  "#9A7B4F",
  "#3F3A36",
  "#6E5A6B",
];

export const rise = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background: ${theme.paper};
    color: ${theme.ink};
    font-family: ${theme.sans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100vh;
    width: 100%;
  }

  a {
    color: ${theme.ink};
    text-decoration: none;
  }

  a:hover {
    color: ${theme.clay};
  }

  img {
    display: block;
    max-width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

// Shared page-header primitives

export const Rise = styled.div<{ $delay?: number }>`
  animation: ${rise} 0.8s ${theme.ease} both;
  animation-delay: ${(p) => p.$delay ?? 0}s;
`;

export const PageIntro = styled.section`
  padding: 56px ${theme.gutter} 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Eyebrow = styled.p<{ $delay?: number }>`
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 600;
  color: ${theme.clay};
  animation: ${rise} 0.8s ${theme.ease} both;
  animation-delay: ${(p) => p.$delay ?? 0.05}s;
`;

export const PageTitle = styled.h1<{ $delay?: number }>`
  margin: 0;
  font-family: ${theme.serif};
  font-weight: 300;
  font-size: clamp(56px, 8vw, 120px);
  line-height: 0.92;
  letter-spacing: -0.02em;
  animation: ${rise} 0.8s ${theme.ease} both;
  animation-delay: ${(p) => p.$delay ?? 0.18}s;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-family: ${theme.serif};
  font-weight: 400;
  font-size: clamp(36px, 4vw, 56px);
  line-height: 1;
`;

export const Meta = styled.span`
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.muted};
`;

export const Toolbar = styled(Rise)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  border-top: 1px solid ${theme.ink};
  padding-top: 24px;
`;

export const PillGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Pill = styled.button<{ $on?: boolean }>`
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid ${theme.ink};
  border-radius: 999px;
  background: ${(p) => (p.$on ? theme.ink : "transparent")};
  color: ${(p) => (p.$on ? theme.paper : theme.ink)};
  font: 600 12px/1 ${theme.sans};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.25s, color 0.25s;

  &:hover {
    background: ${(p) => (p.$on ? theme.ink : theme.hover)};
  }
`;

export const ArrowIcon = ({ size = "sm" }: { size?: "sm" | "lg" }) =>
  size === "lg" ? (
    <svg width="34" height="22" viewBox="0 0 34 22" fill="none" aria-hidden="true">
      <path d="M1 11h30M22 1l10 10-10 10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
      <path d="M1 6h15M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
