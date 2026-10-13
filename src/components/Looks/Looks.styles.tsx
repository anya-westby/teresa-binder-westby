import styled from "styled-components";
import { fadeIn, rise, theme } from "../../styledComponents/globals";

export const Gallery = styled.section`
  padding: 0 ${theme.gutter} 96px;
`;

export const Masonry = styled.div`
  columns: 3;
  column-gap: 28px;

  @media (max-width: 1100px) {
    columns: 2;
  }

  @media (max-width: 560px) {
    columns: 1;
  }
`;

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin: 0 0 28px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${theme.ink};
  font-family: ${theme.sans};
  text-align: left;
  cursor: zoom-in;
  break-inside: avoid;
  animation: ${rise} 0.7s ${theme.ease} both;
`;

export const Frame = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    /* 3:4 placeholder until the lazy image loads and reports its own ratio */
    aspect-ratio: auto 3 / 4;
    transition: transform 1.2s ${theme.ease};
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${theme.ink};
    opacity: 0;
    transition: opacity 0.4s;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }

  ${Card}:hover &::after {
    opacity: 0.18;
  }
`;

export const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: baseline;
  width: 100%;
  border-top: 1px solid ${theme.line};
  padding-top: 10px;
  transition: transform 0.35s;

  ${Card}:hover & {
    transform: translateX(6px);
  }
`;

export const Name = styled.span`
  font-family: ${theme.serif};
  font-size: 22px;
  line-height: 1.15;
  text-wrap: balance;
`;

export const Production = styled.span`
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.muted};
  white-space: nowrap;
`;

export const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(244, 239, 231, 0.97);
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) 64px;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 16px;
  padding: 20px ${theme.gutter};
  animation: ${fadeIn} 0.3s both;
`;

export const LightboxBar = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.muted};
`;

export const LightboxImage = styled.figure`
  grid-column: 2;
  margin: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  img {
    min-height: 0;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    flex: 1 1 auto;
  }

  figcaption {
    display: flex;
    gap: 16px;
    align-items: baseline;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
`;

export const IconButton = styled.button`
  min-width: 44px;
  min-height: 44px;
  align-self: center;
  border: 1px solid ${theme.ink};
  border-radius: 999px;
  background: transparent;
  color: ${theme.ink};
  font: 600 12px/1 ${theme.sans};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0 14px;
  transition: background 0.25s, color 0.25s;

  &:hover {
    background: ${theme.ink};
    color: ${theme.paper};
  }
`;
