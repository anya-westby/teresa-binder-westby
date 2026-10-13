import * as React from "react";
import { Link } from "gatsby";
import {
  BigLine,
  Bottom,
  CallToAction,
  ContactLinks,
  Foot,
  FootFull,
} from "./Footer.styles";

export const EMAIL = "tgoddess@mac.com";
export const PHONE = "(610) 883-3387";
export const PHONE_HREF = "tel:+16108833387";

const year = new Date().getFullYear();

export default function Footer({ full, isContact }: { full?: boolean; isContact?: boolean }) {
  if (full) {
    return (
      <FootFull>
        <CallToAction>
          <BigLine>
            Let's talk <em>wardrobe.</em>
          </BigLine>
          <ContactLinks>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={PHONE_HREF}>{PHONE}</a>
          </ContactLinks>
        </CallToAction>
        <Bottom $ruled>
          <span>© {year} Teresa Binder Westby</span>
          <span>Costume Designer</span>
        </Bottom>
      </FootFull>
    );
  }

  return (
    <Foot>
      <Bottom>
        <span>© {year} Teresa Binder Westby</span>
        {isContact ? <Link to="/">Home</Link> : <Link to="/contact">Contact</Link>}
      </Bottom>
    </Foot>
  );
}
