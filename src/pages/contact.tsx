import { Seo } from "../components/Seo";
import * as React from "react";
import { active_screen } from "../components/NavBar/NavBar";
import Contact from "../components/Contact/Contact";
import { SiteWrapper } from "../components/SiteWrapper/SiteWrapper";

const ContactPage: React.FC = () => {
  return (
    <SiteWrapper activeItem={active_screen.contact}>
      <Contact />
    </SiteWrapper>
  );
};

export default ContactPage;

export const Head = () => (
  <Seo
    title="Contact"
    description="Contact costume designer Teresa Binder Westby for film, television, and commercial productions."
    pathname="/contact/"
  />
);
