import React, { useState } from "react";
import {
  Container,
  Title,
  VideoSection,
  ContentSection,
  StyledIframe,
  Navigation,
  NavigationButton,
  Counter,
  InfoContainer,
  AdTitle,
  AdRole,
  Divider,
  Year,
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
      <Title>Advertisements</Title>

      <VideoSection>
        <StyledIframe
          src={ads[currentIndex].imgSrc}
          title={ads[currentIndex].title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoSection>

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
    </Container>
  );
}
