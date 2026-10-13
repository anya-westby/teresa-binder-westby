import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";
import { rise, theme } from "../../styledComponents/globals";

const grow = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

export const Hero = styled.section`
  padding: 72px ${theme.gutter} 56px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const HeroName = styled.h1`
  margin: 0;
  font-family: ${theme.serif};
  font-weight: 300;
  font-size: clamp(56px, 10vw, 148px);
  line-height: 0.92;
  letter-spacing: -0.02em;
  max-width: 14ch;
  text-wrap: balance;
  animation: ${rise} 0.9s ${theme.ease} 0.22s both;

  em {
    font-weight: 300;
  }
`;

export const Ruler = styled.div`
  height: 1px;
  width: 100%;
  background: ${theme.ink};
  transform-origin: left;
  animation: ${grow} 1.2s ${theme.easeInOut} 0.5s both;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 32px;
  align-items: end;
  animation: ${rise} 0.9s ${theme.ease} 0.36s both;
`;

export const Lede = styled.p`
  margin: 0;
  font-family: ${theme.serif};
  font-size: 28px;
  line-height: 1.3;
  max-width: 30ch;
  text-wrap: pretty;
`;

export const Facts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${theme.muted};
`;

export const Btn = styled(Link)`
  justify-self: start;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 48px;
  padding: 0 24px;
  border: 1px solid ${theme.ink};
  border-radius: 999px;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
  transition: background 0.3s, color 0.3s;

  svg {
    transition: transform 0.3s;
  }

  &:hover {
    background: ${theme.ink};
    color: ${theme.paper};
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

export const Section = styled.section`
  padding: 64px ${theme.gutter};
  display: flex;
  flex-direction: column;
  gap: 40px;
  border-top: 1px solid ${theme.line};
`;

export const WorkSection = styled(Section)`
  padding-top: 80px;
  border-top-color: ${theme.ink};
`;

export const SectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 24px;
  flex-wrap: wrap;

  h2 span {
    font-style: italic;
    color: ${theme.clay};
  }
`;

export const TextLink = styled(Link)`
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 1px solid currentColor;
  padding-bottom: 3px;
`;

export const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 24px;
`;

export const Tile = styled(Link)`
  position: relative;
  overflow: hidden;
  display: block;
  aspect-ratio: 3 / 4;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.1s ${theme.ease};
  }

  &:hover img {
    transform: scale(1.04);
  }

  .num {
    position: absolute;
    top: 16px;
    left: 18px;
    font-size: 12px;
    letter-spacing: 0.14em;
    color: ${theme.paper};
    mix-blend-mode: difference;
  }

  .cap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px 22px;
    background: ${theme.ink};
    color: ${theme.paper};
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 12px;
    transform: translateY(100%);
    transition: transform 0.45s ${theme.easeInOut};
  }

  &:hover .cap,
  &:focus-visible .cap {
    transform: none;
  }

  @media (hover: none) {
    .cap {
      transform: none;
    }
  }
`;

export const CapTitle = styled.span`
  font-family: ${theme.serif};
  font-size: 26px;
  line-height: 1;
`;

export const Small = styled.span`
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const LooksSection = styled(Section)`
  padding-right: 0;
  gap: 32px;
  margin-top: 40px;

  ${SectionHead} {
    padding-right: ${theme.gutter};
  }
`;

export const Strip = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 12px;
  padding-right: ${theme.gutter};
  scroll-snap-type: x mandatory;
`;

export const Look = styled(Link)`
  flex: 0 0 240px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.5s ${theme.ease};

  &:hover {
    transform: translateY(-8px);
  }

  img {
    width: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
  }
`;

export const LookName = styled.span`
  font-family: ${theme.serif};
  font-size: 20px;
  line-height: 1.15;
`;

export const LookMeta = styled(Small)`
  color: ${theme.muted};
`;

export const AdsSection = styled.section`
  padding: 64px ${theme.gutter};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(360px, 100%), 1fr));
  gap: 48px;
  border-top: 1px solid ${theme.line};
`;

export const AdsIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    color: ${theme.muted};
    max-width: 38ch;
  }
`;

export const AdList = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${theme.line};
`;

export const AdRow = styled(Link)`
  display: grid;
  grid-template-columns: 64px 1fr auto;
  gap: 16px;
  align-items: baseline;
  padding: 18px 0;
  border-top: 1px solid ${theme.line};
  transition: background 0.3s, padding-left 0.3s;

  &:hover {
    background: ${theme.hover};
    padding-left: 12px;
  }

  .yr,
  .sub {
    color: ${theme.muted};
  }

  .yr {
    font-size: 13px;
    letter-spacing: 0.12em;
  }

  .brand {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .name {
    font-family: ${theme.serif};
    font-size: 24px;
    line-height: 1.1;
  }

  .sub {
    font-size: 14px;
  }
`;
