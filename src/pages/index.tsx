import React from "react";
import { active_screen } from "../components/NavBar/NavBar";
import { SiteWrapper } from "../components/SiteWrapper/SiteWrapper";
import Landing from "../components/Landing/Landing";

const index: React.FC = () => {
  return (
    <SiteWrapper activeItem={active_screen.home}>
      <Landing />
    </SiteWrapper>
  );
};

export default index;
