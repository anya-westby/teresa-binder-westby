import React, { useState } from "react";
import * as S from "./Films.styles";
import { galleryData } from "../GalleryData/GalleryData";

const Films: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<
    "chronological" | "reverseChron" | "alphabetical"
  >("chronological");

  // Keep your existing sort logic here
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
    <S.Container>
      <S.Title>Films</S.Title>
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
        {filmData.map((film, index) => (
          <S.GalleryItem key={index}>
            <S.ImageContainer>
              <img src={film.imgSrc} alt={film.title} loading="lazy" />
            </S.ImageContainer>
            <S.ItemOverlay>
              <S.ContentWrapper>
                <S.ItemTitle>{film.title}</S.ItemTitle>
                <S.ItemRole>{film.role}</S.ItemRole>
                <S.YearContainer>
                  <S.Divider />
                  <S.Year>{film.year}</S.Year>
                </S.YearContainer>
              </S.ContentWrapper>
            </S.ItemOverlay>
          </S.GalleryItem>
        ))}
      </S.GalleryGrid>
    </S.Container>
  );
};

export default Films;
