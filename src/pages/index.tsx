import React, { useLayoutEffect } from "react";
import { active_screen } from "../components/NavBar/NavBar";
import { SiteWrapper } from "../components/SiteWrapper/SiteWrapper";
import Landing from "../components/Landing/Landing";

const index: React.FC = () => {
  useLayoutEffect(() => {
    // Force immediate style application
    document.body.style.background = "#0f0f0f";
    document.documentElement.style.background = "#0f0f0f";
  }, []);

  return (
    <SiteWrapper activeItem={active_screen.home}>
      <Landing />
    </SiteWrapper>
  );
};

export default index;
