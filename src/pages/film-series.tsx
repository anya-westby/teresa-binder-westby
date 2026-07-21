import { Seo } from "../components/Seo";
import * as React from "react";
import { active_screen } from "../components/NavBar/NavBar";
import { SiteWrapper } from "../components/SiteWrapper/SiteWrapper";
import FilmSeries from "../components/FilmSeries/FilmSeries";

const FilmSeriesPage: React.FC = () => {
  return (
    <SiteWrapper activeItem={active_screen.filmSeries}>
      <FilmSeries />
    </SiteWrapper>
  );
};

export default FilmSeriesPage;

export const Head = () => (
  <Seo
    title="Film + Series"
    description="Film and television credits of costume designer Teresa Binder Westby, including Equity, Special Ops: Lioness, Creed, Unbreakable, Signs, and National Treasure."
    pathname="/film-series/"
  />
);
