import React, { useState } from "react";
import {
  ContentOverlay,
  GalleryContainer,
  GalleryItem,
  Header,
  ImageContainer,
  PageTitle,
  Role,
  SeriesPageContainer,
  SortButton,
  SortControls,
  Title,
  Year,
} from "./Series.styles";
import { galleryData } from "../GalleryData/GalleryData";

const Series: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<
    "chronological" | "reverseChron" | "alphabetical"
  >("chronological");

  const seriesData = [...galleryData.series].sort((a, b) => {
    switch (sortOrder) {
      case "chronological":
        return parseInt(a.year) - parseInt(b.year);
      case "reverseChron":
        return parseInt(b.year) - parseInt(a.year);
      case "alphabetical":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <SeriesPageContainer>
      <Header>
        <PageTitle>Series</PageTitle>
        <SortControls>
          <SortButton
            onClick={() => setSortOrder("chronological")}
            active={sortOrder === "chronological"}
          >
            Oldest First
          </SortButton>
          <SortButton
            onClick={() => setSortOrder("reverseChron")}
            active={sortOrder === "reverseChron"}
          >
            Newest First
          </SortButton>
          <SortButton
            onClick={() => setSortOrder("alphabetical")}
            active={sortOrder === "alphabetical"}
          >
            A-Z
          </SortButton>
        </SortControls>
      </Header>
      <GalleryContainer>
        {seriesData.map((show, index) => {
          return (
            <GalleryItem key={index}>
              <ImageContainer>
                <img src={show.imgSrc} alt={show.title} loading="lazy" />
              </ImageContainer>
              <ContentOverlay>
                <Title>{show.title}</Title>
                <Role>{show.role}</Role>
                <Year>{show.year}</Year>
              </ContentOverlay>
            </GalleryItem>
          );
        })}
      </GalleryContainer>
    </SeriesPageContainer>
  );
};

export default Series;
