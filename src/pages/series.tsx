import { Seo } from "../components/Seo";
import * as React from "react";
import { active_screen } from "../components/NavBar/NavBar";
import { SiteWrapper } from "../components/SiteWrapper/SiteWrapper";
import Series from "../components/Series/Series";

const SeriesPage: React.FC = () => {
  return (
    <SiteWrapper activeItem={active_screen.series}>
      <Series />
    </SiteWrapper>
  );
};

export default SeriesPage;

export const Head = () => <Seo title="Series" pathname="/series/" />;
