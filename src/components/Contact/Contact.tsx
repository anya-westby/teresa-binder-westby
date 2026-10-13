import * as React from "react";
import { EMAIL, PHONE, PHONE_HREF } from "../Footer/Footer";
import { ArrowIcon, Eyebrow, PageIntro, PageTitle, Rise, theme } from "../../styledComponents/globals";
import * as S from "./Contact.styles";

const Contact: React.FC = () => {
  return (
    <>
      <PageIntro>
        <Eyebrow>Get in touch</Eyebrow>
        <PageTitle>Contact</PageTitle>
        <Rise $delay={0.3} style={{ height: 1, background: theme.ink }} />
      </PageIntro>
      <S.Body $delay={0.42}>
        <S.Links>
          <S.BigLink href={`mailto:${EMAIL}`}>
            {EMAIL} <ArrowIcon size="lg" />
          </S.BigLink>
          <S.BigLink href={PHONE_HREF}>
            {PHONE} <ArrowIcon size="lg" />
          </S.BigLink>
        </S.Links>
        <S.Blurb>
          <p>Costume design for film, series and commercials.</p>
          <p>
            Available for productions nationwide. For bookings, availability and portfolio
            requests, email or call directly.
          </p>
        </S.Blurb>
      </S.Body>
    </>
  );
};

export default Contact;
