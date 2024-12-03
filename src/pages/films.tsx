import React from "react";
import { active_screen } from "../components/NavBar/NavBar";
import { SiteWrapper } from "../components/SiteWrapper/SiteWrapper";
import Films from "../components/Films/Films";

const FilmsPage: React.FC = () => {
  return (
    <SiteWrapper activeItem={active_screen.films}>
      <Films />
    </SiteWrapper>
  );
};

export default FilmsPage;
