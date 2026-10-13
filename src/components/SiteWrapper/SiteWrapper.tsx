import * as React from "react";
import styled from "styled-components";
import NavBar, { active_screen } from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { GlobalStyle } from "../../styledComponents/globals";

const Site = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SiteWrapper = ({
  activeItem,
  children,
}: {
  activeItem: string;
  children: React.ReactNode;
}) => {
  return (
    <Site>
      <GlobalStyle />
      <NavBar activeItem={activeItem} />
      <main>{children}</main>
      <Footer
        full={activeItem === active_screen.home}
        isContact={activeItem === active_screen.contact}
      />
    </Site>
  );
};
