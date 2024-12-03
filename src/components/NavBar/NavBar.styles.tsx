import { Link } from "gatsby";
import styled from "styled-components";

export const theme = {
  darkGreen: "#2F4F4F",
  lightGreen: "#90A974",
  sage: "#B7C4A7",
  cream: "#F5F5F1",
  charcoal: "#2C2C2C",
};

export const Nav = styled.nav`
  background-color: transparent;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center; // Change to center alignment
  align-items: center;
  padding: 1.5rem 3rem;
  z-index: 1000;
  transition: all 0.3s ease;

  &.nav--scrolled {
    background-color: rgba(47, 79, 79, 0.2);
    backdrop-filter: blur(8px);
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 800px; // Add max-width
  justify-content: center; // Center the links

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    gap: 1.5rem;
    background: rgba(47, 79, 79, 0.95);
    padding: 2rem;
    backdrop-filter: blur(8px);

    &.active {
      display: flex;
    }
  }
`;

export const NavToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.cream};
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
  position: fixed; // Change to fixed
  right: 1.5rem;
  top: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }

  .nav__hamburger {
    font-size: 1.75rem;
    opacity: 0.85;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export const NavLink = styled(Link)`
  font-family: "DM Sans", sans-serif;
  letter-spacing: 3px;
  font-weight: 200;
  color: ${theme.cream};
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.85;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${theme.sage};
    transition: all 0.3s ease;
  }

  &:hover {
    opacity: 1;

    &::after {
      width: 100%;
    }
  }

  &.active {
    opacity: 1;
    color: ${theme.sage};

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 0;
  }
`;
