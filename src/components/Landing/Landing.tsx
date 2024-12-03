import React from "react";
import {
  ContentContainer,
  ImageContainer,
  IntroSection,
  Section,
  StyledImage,
  Title,
  NavigationLink,
  ScrollContainer,
} from "./Landing.styles";
import { Header, Subtext } from "../../styledComponents/globals";

export default function Landing() {
  const sections = [
    {
      title: "Film",
      link: "/films",
      linkText: "Films",
      imagePath:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/landing%2FUntitled.png?alt=media&token=9e4debe5-5122-4641-9c9a-a29857b237f4",
      imageLeft: true,
    },
    {
      title: "Artistic Process",
      link: "/process",
      linkText: "Explore Process",
      imagePath:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/landing%2FUntitled%20(2).png?alt=media&token=5737013d-7358-48e4-bfa4-132ba3fc39e6",
      imageLeft: false,
    },
    {
      title: "Costume Stories",
      link: "/projects",
      linkText: "See Projects",
      imagePath:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/landing%2FUntitled%20(3).png?alt=media&token=54a2cda3-b99d-4da8-b899-ceffdc13c80e",
      imageLeft: true,
    },
    {
      title: "Creative Journey",
      link: "/about",
      linkText: "About Me",
      imagePath:
        "https://firebasestorage.googleapis.com/v0/b/tbw-portfolio-99437.appspot.com/o/landing%2FUntitled%20(4).png?alt=media&token=dd2559a2-c12a-45bc-8694-48bfc2d4997f",
      imageLeft: false,
    },
  ];

  return (
    <ScrollContainer>
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
                  loading="lazy"
                />
              </ImageContainer>
              <ContentContainer isLeft={!section.imageLeft}>
                <Title>{section.title}</Title>
                <NavigationLink to={section.link}>
                  {section.linkText}
                </NavigationLink>
              </ContentContainer>
            </>
          ) : (
            <>
              <ContentContainer isLeft={!section.imageLeft}>
                <Title>{section.title}</Title>
                <NavigationLink to={section.link}>
                  {section.linkText}
                </NavigationLink>
              </ContentContainer>
              <ImageContainer isLeft={section.imageLeft}>
                <StyledImage
                  src={section.imagePath}
                  alt={section.title}
                  loading="lazy"
                />
              </ImageContainer>
            </>
          )}
        </Section>
      ))}
    </ScrollContainer>
  );
}
