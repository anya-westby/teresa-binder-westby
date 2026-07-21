// Ads.jsx
import React, { useState } from "react";
import {
  Container,
  Title,
  StyledIframe,
  Navigation,
  NavigationButton,
  Counter,
  InfoContainer,
  AdTitle,
  AdRole,
  Divider,
  Year,
  LeftSection,
  RightSection,
  ContentSection,
} from "./Ads.styles";
import { galleryData } from "../GalleryData/GalleryData";

export default function Ads() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ads = [...galleryData.ads];

  const nextAd = () => {
    setCurrentIndex((prev) => (prev + 1) % ads.length);
  };

  const prevAd = () => {
    setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);
  };

  return (
    <Container>
      <LeftSection>
        <Title>Advertisements</Title>
        <ContentSection>
          <InfoContainer>
            <AdTitle>{ads[currentIndex].title}</AdTitle>
            <AdRole>{ads[currentIndex].role}</AdRole>
            <Divider />
            <Year>{ads[currentIndex].year}</Year>
          </InfoContainer>

          {ads.length > 1 && (
            <Navigation>
              <NavigationButton onClick={prevAd} disabled={ads.length <= 1}>
                Previous
              </NavigationButton>
              <Counter>
                {currentIndex + 1} / {ads.length}
              </Counter>
              <NavigationButton onClick={nextAd} disabled={ads.length <= 1}>
                Next
              </NavigationButton>
            </Navigation>
          )}
        </ContentSection>
      </LeftSection>

      <RightSection>
        <StyledIframe
          src={ads[currentIndex].imgSrc}
          title={ads[currentIndex].title}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </RightSection>
    </Container>
  );
}
