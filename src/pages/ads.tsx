import { Seo } from "../components/Seo";
import * as React from "react";
import { active_screen } from "../components/NavBar/NavBar";
import { SiteWrapper } from "../components/SiteWrapper/SiteWrapper";
import Ads from "../components/Ads/Ads";

const AdsPage: React.FC = () => {
  return (
    <SiteWrapper activeItem={active_screen.ads}>
      <Ads />
    </SiteWrapper>
  );
};

export default AdsPage;

export const Head = () => (
  <Seo
    title="Advertisements"
    description="Commercial costume design work by Teresa Binder Westby for brands including Comcast, Campbell's Chunky, Tostitos, and the Philadelphia 76ers."
    pathname="/ads/"
  />
);
