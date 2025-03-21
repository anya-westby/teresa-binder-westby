import * as React from "react";
import { active_screen } from "../components/NavBar/NavBar";
import { SiteWrapper } from "../components/SiteWrapper/SiteWrapper";
import Looks from "../components/Looks/Looks";

const LooksPage: React.FC = () => {
  return (
    <SiteWrapper activeItem={active_screen.looks}>
      <Looks />
    </SiteWrapper>
  );
};

export default LooksPage;
