import React from "react";
import { Mail, Phone, Title } from "@mui/icons-material";
import {
  ContactCard,
  ContactInfo,
  ContactItem,
  ContactText,
  Container,
} from "./Contact.styles";

const Contact: React.FC = () => {
  return (
    <Container>
      <ContactCard>
        <Title>Contact Me</Title>
        <ContactInfo>
          <ContactItem>
            <Mail className="icon" />
            <ContactText>tgoddess@mac.com</ContactText>
          </ContactItem>
          <ContactItem>
            <Phone className="icon" />
            <ContactText>(610) 883-7068</ContactText>
          </ContactItem>
        </ContactInfo>
      </ContactCard>
    </Container>
  );
};

export default Contact;
