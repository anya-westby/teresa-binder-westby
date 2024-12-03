import { useEffect, useState } from "react";
import React from "react";
import Hamburger from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import useWindow from "../../utils/hooks/useWindow";
import { Nav, NavLink, NavLinkContainer, NavToggle } from "./NavBar.styles";

export const active_screen = {
  home: "Home",
  contact: "Contact",
  films: "Film",
  series: "Series",
  ads: "Ads",
};

export default function NavBar({ activeItem }: { activeItem: string }) {
  const [isActive, setIsActive] = useState(false);
  const { windowWidth } = useWindow();

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("navbar");
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add("nav--scrolled");
        } else {
          nav.classList.remove("nav--scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsActive(false);
  }, [windowWidth]);

  return (
    <Nav id="navbar">
      <NavLinkContainer className={isActive ? "active" : ""}>
        <NavLink
          to="/"
          className={activeItem === active_screen.home ? "active" : ""}
        >
          Home
        </NavLink>
        <NavLink
          to="/films"
          className={activeItem === active_screen.films ? "active" : ""}
        >
          Film
        </NavLink>
        <NavLink
          to="/series"
          className={activeItem === active_screen.series ? "active" : ""}
        >
          Series
        </NavLink>
        <NavLink
          to="/ads"
          className={activeItem === active_screen.ads ? "active" : ""}
        >
          Ads
        </NavLink>
        <NavLink
          to="/contact"
          className={activeItem === active_screen.contact ? "active" : ""}
        >
          Contact
        </NavLink>
      </NavLinkContainer>
      <NavToggle onClick={() => setIsActive(!isActive)}>
        {isActive ? (
          <Close className="nav__hamburger" />
        ) : (
          <Hamburger className="nav__hamburger" />
        )}
      </NavToggle>
    </Nav>
  );
}
