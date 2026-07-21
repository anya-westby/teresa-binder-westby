import { Seo } from "../components/Seo";
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

export const Head = () => (
  <Seo
    title="Looks"
    description="Selected costume looks designed by Teresa Binder Westby for film and television productions."
    pathname="/looks/"
  />
);
