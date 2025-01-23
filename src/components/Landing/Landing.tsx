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

export default function Landing() {
  // const [contentLoaded, setContentLoaded] = useState(false);

  return (
    <Container>
      <IntroSection>
        <Header>teresa binder westby</Header>
        <Subtext>costume designer</Subtext>
      </IntroSection>

      {sections.map((section, index) => (
        <Section key={index}>
          {section.imageLeft ? (
            <>
              <ImageContainer isLeft={section.imageLeft}>
                <StyledImage
                  src={section.imagePath}
                  alt={section.title}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </ImageContainer>
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
              <ImageContainer isLeft={section.imageLeft}>
                <StyledImage
                  src={section.imagePath}
                  alt={section.title}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </ImageContainer>
            </>
          )}
        </Section>
      ))}
    </Container>
  );
}
