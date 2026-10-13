import * as React from "react";
import { useState } from "react";
import { Brand, Header, Links, NavLink, Toggle } from "./NavBar.styles";

export const active_screen = {
  home: "home",
  filmSeries: "filmSeries",
  ads: "ads",
  looks: "looks",
  contact: "contact",
};

const links = [
  { to: "/film-series", label: "Film + Series", key: active_screen.filmSeries },
  { to: "/ads", label: "Ads", key: active_screen.ads },
  { to: "/looks", label: "Looks", key: active_screen.looks },
  { to: "/contact", label: "Contact", key: active_screen.contact },
];

export default function NavBar({ activeItem }: { activeItem: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <Brand to="/">Teresa Binder Westby</Brand>
      <Toggle
        type="button"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </Toggle>
      <Links id="primary-nav" aria-label="Primary" $open={open}>
        {links.map((l) => (
          <NavLink
            key={l.key}
            to={l.to}
            className={activeItem === l.key ? "active" : ""}
            aria-current={activeItem === l.key ? "page" : undefined}
          >
            {l.label}
          </NavLink>
        ))}
      </Links>
    </Header>
  );
}
