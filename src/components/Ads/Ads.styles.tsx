import styled, { keyframes } from "styled-components";
import { theme } from "../../styledComponents/globals";

const settle = keyframes`
  from { opacity: 0; transform: scale(.985); }
  to { opacity: 1; transform: none; }
`;

export const Layout = styled.section`
  padding: 0 ${theme.gutter} 96px;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(min(400px, 100%), 1fr);
  gap: 48px;
  align-items: start;

  @media (max-width: 1000px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const StageCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 0;
`;

export const Stage = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${theme.ink};
  animation: ${settle} 0.5s both;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export const Poster = styled.button`
  position: absolute;
  inset: 0;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${theme.paper};
  cursor: pointer;
  font-family: ${theme.sans};

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.72);
    transition: filter 0.4s;
  }

  &:hover img {
    filter: brightness(0.6);
  }

  .play {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 88px;
    height: 88px;
    margin: -44px 0 0 -44px;
    border-radius: 999px;
    border: 1px solid ${theme.paper};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s ${theme.ease}, background 0.3s, color 0.3s;
  }

  &:hover .play {
    transform: scale(1.12);
    background: ${theme.paper};
    color: ${theme.ink};
  }

  .bar {
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 20px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-align: left;
  }
`;

export const Caption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 20px;
  flex-wrap: wrap;

  h2 {
    margin: 0;
    font-family: ${theme.serif};
    font-weight: 400;
    font-size: clamp(32px, 3.5vw, 48px);
    line-height: 1;
  }

  h2 em {
    color: ${theme.clay};
  }

  p {
    margin: 0;
    font-size: 16px;
    color: ${theme.muted};
  }
`;

export const SpotList = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${theme.line};

  > span {
    padding-bottom: 14px;
  }
`;

export const Spot = styled.button<{ $on: boolean }>`
  display: grid;
  grid-template-columns: 56px 1fr auto;
  gap: 16px;
  align-items: center;
  width: 100%;
  min-height: 64px;
  padding: 20px 0;
  padding-left: ${(p) => (p.$on ? "16px" : "0")};
  border: 0;
  border-top: 1px solid ${theme.line};
  background: ${(p) => (p.$on ? theme.ink : "transparent")};
  color: ${(p) => (p.$on ? theme.paper : theme.ink)};
  font-family: ${theme.sans};
  text-align: left;
  cursor: pointer;
  transition: background 0.3s, padding-left 0.3s;

  &:hover {
    background: ${(p) => (p.$on ? theme.ink : theme.hover)};
    padding-left: ${(p) => (p.$on ? "16px" : "12px")};
  }

  .small {
    font-size: 13px;
    letter-spacing: 0.12em;
    padding-right: 12px;
  }

  .brand {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }

  .name {
    font-family: ${theme.serif};
    font-size: 26px;
    line-height: 1.05;
  }

  .sub {
    font-size: 14px;
    color: ${(p) => (p.$on ? "#C9BFB2" : theme.muted)};
  }
`;
