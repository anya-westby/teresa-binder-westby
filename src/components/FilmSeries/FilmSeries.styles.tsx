import styled from "styled-components";
import { fadeIn, theme } from "../../styledComponents/globals";

export const List = styled.section`
  padding: 0 ${theme.gutter} 96px;
  display: flex;
  flex-direction: column;
  gap: 72px;
  animation: ${fadeIn} 0.5s both;
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 32px;
  align-items: start;
`;

export const GroupHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: sticky;
  top: 24px;

  h2 {
    margin: 0;
    font-family: ${theme.serif};
    font-weight: 400;
    font-size: clamp(32px, 3.5vw, 48px);
    line-height: 1;
  }
`;

export const Rows = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${theme.line};
  grid-column: span 2;

  @media (max-width: 720px) {
    grid-column: auto;
  }
`;

export const Row = styled.li`
  display: grid;
  grid-template-columns: 48px 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 18px 0;
  border-top: 1px solid ${theme.line};
  transition: background 0.3s, padding-left 0.3s;

  &:hover {
    background: ${theme.hover};
    padding-left: 12px;
  }

  img {
    width: 48px;
    height: 64px;
    object-fit: cover;
    transition: transform 0.5s ${theme.ease};
  }

  &:hover img {
    transform: rotate(-4deg) scale(1.08);
  }

  @media (max-width: 720px) {
    grid-template-columns: 40px 1fr;

    img {
      width: 40px;
      height: 54px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const Title = styled.span`
  font-family: ${theme.serif};
  font-size: 28px;
  line-height: 1.05;
  transition: transform 0.3s;

  ${Row}:hover & {
    transform: translateX(6px);
  }
`;

export const Role = styled.span`
  font-size: 14px;
  color: ${theme.muted};
`;

export const Year = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.muted};
  white-space: nowrap;

  span:first-child {
    border: 1px solid ${theme.line};
    border-radius: 999px;
    padding: 6px 10px;
  }

  @media (max-width: 720px) {
    grid-column: 2;
  }
`;
