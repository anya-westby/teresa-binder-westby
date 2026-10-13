import styled from "styled-components";
import { fadeIn, rise, theme } from "../../styledComponents/globals";

export const Gallery = styled.section`
  padding: 0 clamp(12px, 2vw, 32px) 96px;
`;

export const Masonry = styled.div`
  columns: 4;
  column-gap: 12px;

  @media (max-width: 1280px) {
    columns: 3;
  }

  @media (max-width: 820px) {
    columns: 2;
    column-gap: 8px;
  }
`;

export const Card = styled.button`
  position: relative;
  display: block;
  width: 100%;
  margin: 0 0 12px;
  padding: 0;
  border: 0;
  overflow: hidden;
  color: ${theme.paper};
  font-family: ${theme.sans};
  text-align: left;
  cursor: zoom-in;
  break-inside: avoid;
  animation: ${rise} 0.7s ${theme.ease} both;

  img {
    width: 100%;
    height: auto;
    /* 3:4 placeholder until the lazy image loads and reports its own ratio */
    aspect-ratio: auto 3 / 4;
    transition: transform 1.2s ${theme.ease};
  }

  &:hover img {
    transform: scale(1.04);
  }

  @media (max-width: 820px) {
    margin-bottom: 8px;
  }
`;

export const Overlay = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 18px;
  background: ${theme.ink};
  transform: translateY(100%);
  transition: transform 0.45s ${theme.easeInOut};

  ${Card}:hover &,
  ${Card}:focus-visible & {
    transform: none;
  }

  @media (hover: none) {
    display: none;
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
  color: ${theme.footMuted};
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

  figcaption ${Production} {
    color: ${theme.muted};
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
