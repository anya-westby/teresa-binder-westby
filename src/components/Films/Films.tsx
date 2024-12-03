import React, { useState } from "react";
import {
  ContentOverlay,
  FilmsPageContainer,
  GalleryContainer,
  GalleryItem,
  Header,
  PageTitle,
  Role,
  Title,
  Year,
  ImageContainer,
  SortControls,
  SortButton,
} from "./Films.styles";
import { galleryData } from "../GalleryData/GalleryData";

const Films: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<
    "chronological" | "reverseChron" | "alphabetical"
  >("chronological");

  const filmData = [...galleryData.film].sort((a, b) => {
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
    <FilmsPageContainer>
      <Header>
        <PageTitle>Films</PageTitle>
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
        {filmData.map((film, index) => {
          return (
            <GalleryItem key={index}>
              <ImageContainer>
                <img src={film.imgSrc} alt={film.title} loading="lazy" />
              </ImageContainer>
              <ContentOverlay>
                <Title>{film.title}</Title>
                <Role>{film.role}</Role>
                <Year>{film.year}</Year>
              </ContentOverlay>
            </GalleryItem>
          );
        })}
      </GalleryContainer>
    </FilmsPageContainer>
  );
};

export default Films;
