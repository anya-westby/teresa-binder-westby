import * as React from "react";
import { Mail, Phone, Title } from "@mui/icons-material";
import * as S from "./Contact.styles";

const Contact: React.FC = () => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.Title>Contact</S.Title>
        <S.Grid>
          <S.ContactLink href="mailto:tgoddess@mac.com">
            <S.ContactItem>
              <S.IconWrapper>
                <Mail />
              </S.IconWrapper>
              <S.Label>Email</S.Label>
              <S.Value>tgoddess@mac.com</S.Value>
            </S.ContactItem>
          </S.ContactLink>

          <S.ContactLink href="tel:+16108837068">
            <S.ContactItem>
              <S.IconWrapper>
                <Phone />
              </S.IconWrapper>
              <S.Label>Phone</S.Label>
              <S.Value>(610) 883-7068</S.Value>
            </S.ContactItem>
          </S.ContactLink>
        </S.Grid>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Contact;
