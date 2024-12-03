import React from "react";
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
