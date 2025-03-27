import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  ContentContainer,
  ImageContainer,
  IntroSection,
  Section,
  StyledImage,
  Title,
  Description,
  StyledLink,
  Container,
  landingTheme,
} from "./Landing.styles";
import { Header, Subtext } from "../../styledComponents/globals";
import { sections } from "./components/Sections/Sections";
import { Link } from "gatsby";

export default function Landing() {
  // const [contentLoaded, setContentLoaded] = useState(false);

  return (
    <Container>
      <IntroSection>
        <Header>teresa binder westby</Header>
        <Subtext>costume designer</Subtext>
      </IntroSection>
      {/* 
      {sections.map((section, index) => (
        <Section key={index}>
          {section.imageLeft ? (
            <>
              <Link
                to={section.link}
                style={{ flex: 1, display: "flex", textDecoration: "none" }}
              >
                <ImageContainer isLeft={section.imageLeft}>
                  <StyledImage
                    src={section.imagePath}
                    alt={section.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </ImageContainer>
              </Link>
              <ContentContainer isLeft={!section.imageLeft}>
                <StyledLink to={section.link}>
                  <Title delay={0.1 * index}>{section.title}</Title>
                </StyledLink>
                <Description isLeft={!section.imageLeft} delay={0.2 * index}>
                  {section.description}
                </Description>
              </ContentContainer>
            </>
          ) : (
            <>
              <ContentContainer isLeft={!section.imageLeft}>
                <StyledLink to={section.link}>
                  <Title>{section.title}</Title>
                </StyledLink>
                <Description isLeft={!section.imageLeft}>
                  {section.description}
                </Description>
              </ContentContainer>
              <Link
                to={section.link}
                style={{ flex: 1, display: "flex", textDecoration: "none" }}
              >
                <ImageContainer isLeft={section.imageLeft}>
                  <StyledImage
                    src={section.imagePath}
                    alt={section.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </ImageContainer>
              </Link>
            </>
          )}
        </Section>
      ))} */}
    </Container>
  );
}
