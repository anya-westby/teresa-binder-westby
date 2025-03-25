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
