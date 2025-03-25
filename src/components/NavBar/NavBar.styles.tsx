import { Link } from "gatsby";
import styled from "styled-components";
import { theme } from "../../styledComponents/globals";

export const Nav = styled.nav`
  background-color: transparent;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 3rem;
  z-index: 1000;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &.nav--scrolled {
    background-color: rgba(47, 79, 79, 0.2);
    backdrop-filter: blur(8px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
    justify-content: flex-start;
    width: 60%;
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
    position: fixed; // Change from absolute to fixed
    top: 0; // Change from 100% to 0
    left: 0;
    right: 0;
    gap: 1.5rem;
    background: rgba(47, 79, 79, 0.95);
    padding: 4rem 2rem 2rem; // Add top padding to account for hamburger
    backdrop-filter: blur(8px);
    height: 100vh; // Cover the full height
    z-index: 999; // Below the toggle button

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
  position: fixed;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 1001; // Ensure it stays above the menu

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
