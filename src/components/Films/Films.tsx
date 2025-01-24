import React, { useState } from "react";
import * as S from "./Films.styles";
import { galleryData } from "../GalleryData/GalleryData";

const PRIORITY_GROUPS = {
  1: "Costume Designer",
  2: "Assistant Costume Designer",
  3: "Personal Costumer",
  4: "Costume Department",
} as const;

const Films: React.FC = () => {
  // Group films by priority
  const groupedFilms = React.useMemo(() => {
    const groups = new Map<number, typeof galleryData.film>();

    // Initialize groups
    Object.keys(PRIORITY_GROUPS).forEach((priority) => {
      groups.set(Number(priority), []);
    });

    // Sort films into priority groups
    galleryData.film.forEach((film) => {
      const priorityGroup = groups.get(film.rolePriority) || groups.get(4)!; // Default to Other
      priorityGroup.push(film);
    });

    // Sort each group by year (most recent first)
    groups.forEach((films, priority) => {
      films.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    });

    return groups;
  }, []);

  // Component for section header
  const SectionHeader = ({ title }: { title: string }) => (
    <S.SectionHeaderContainer>
      <S.SectionHeaderLine />
      <S.SectionHeaderContent>
        <S.SectionHeaderText>{title}</S.SectionHeaderText>
      </S.SectionHeaderContent>
      <S.SectionHeaderLine />
    </S.SectionHeaderContainer>
  );

  // Component for film grid section
  const FilmSection = ({ films }: { films: typeof galleryData.film }) => (
    <S.GalleryGrid>
      {films.map((film, index) => (
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
  );

  return (
    <S.Container>
      <S.Title>Film</S.Title>
      {Array.from(groupedFilms.entries())
        .sort(([a], [b]) => a - b)
        .map(([priority, films]) =>
          films.length > 0 ? (
            <React.Fragment key={priority}>
              <SectionHeader
                title={
                  PRIORITY_GROUPS[priority as keyof typeof PRIORITY_GROUPS]
                }
              />
              <FilmSection films={films} />
            </React.Fragment>
          ) : null
        )}
    </S.Container>
  );
};

export default Films;
