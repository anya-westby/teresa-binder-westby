import { Link } from "gatsby";
import styled from "styled-components";
import { theme } from "../../styledComponents/globals";

export const Header = styled.header`
  position: relative;
  z-index: 10;
  padding: 28px ${theme.gutter};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Brand = styled(Link)`
  font-family: ${theme.serif};
  font-size: 22px;
  letter-spacing: 0.04em;
  font-weight: 500;
`;

export const Links = styled.nav<{ $open: boolean }>`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 720px) {
    display: ${(p) => (p.$open ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding: 8px ${theme.gutter} 24px;
    background: ${theme.paper};
    border-bottom: 1px solid ${theme.line};
  }
`;

export const NavLink = styled(Link)`
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  padding: 12px 2px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 6px;
    height: 1px;
    background: ${theme.clay};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ${theme.easeInOut};
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`;

export const Toggle = styled.button`
  display: none;
  min-width: 44px;
  min-height: 44px;
  padding: 0 4px;
  border: 0;
  background: transparent;
  color: ${theme.ink};
  font: 600 12px/1 ${theme.sans};
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 720px) {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
