import * as React from "react";
import NavBar from "../NavBar/NavBar";

import { Site, SiteOverflow } from "./SiteWrapper.styles";

export const SiteWrapper = ({
  activeItem,
  children,
}: {
  activeItem: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <NavBar activeItem={activeItem} />
      <Site>
        <SiteOverflow>{children}</SiteOverflow>
        {/* <Footer activeItem={activeItem} /> */}
      </Site>
    </>
  );
};
