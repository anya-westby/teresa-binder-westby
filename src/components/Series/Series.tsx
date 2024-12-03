import React, { useState } from "react";
import { galleryData } from "../GalleryData/GalleryData";
import * as S from "./Series.styles";

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
    <S.Container>
      <S.Title>Series</S.Title>
      <S.FilterContainer>
        <S.FilterButton
          onClick={() => setSortOrder("reverseChron")}
          active={sortOrder === "reverseChron"}
        >
          Newest First
        </S.FilterButton>
        <S.FilterButton
          onClick={() => setSortOrder("chronological")}
          active={sortOrder === "chronological"}
        >
          Oldest First
        </S.FilterButton>
        <S.FilterButton
          onClick={() => setSortOrder("alphabetical")}
          active={sortOrder === "alphabetical"}
        >
          A-Z
        </S.FilterButton>
      </S.FilterContainer>

      <S.GalleryGrid>
        {seriesData.map((show, index) => (
          <S.GalleryItem key={index}>
            <S.ImageContainer>
              <img src={show.imgSrc} alt={show.title} loading="lazy" />
            </S.ImageContainer>
            <S.ItemOverlay>
              <S.ContentWrapper>
                <S.ItemTitle>{show.title}</S.ItemTitle>
                <S.ItemRole>{show.role}</S.ItemRole>
                <S.YearContainer>
                  <S.Divider />
                  <S.Year>{show.year}</S.Year>
                </S.YearContainer>
              </S.ContentWrapper>
            </S.ItemOverlay>
          </S.GalleryItem>
        ))}
      </S.GalleryGrid>
    </S.Container>
  );
};

export default Series;
