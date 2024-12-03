import React from "react";
import { active_screen } from "../components/NavBar/NavBar";
import { SiteWrapper } from "../components/SiteWrapper/SiteWrapper";
import Films from "../components/Films/Films";
import Ads from "../components/Ads/Ads";

const AdsPage: React.FC = () => {
  return (
    <SiteWrapper activeItem={active_screen.ads}>
      <Ads />
    </SiteWrapper>
  );
};

export default AdsPage;
