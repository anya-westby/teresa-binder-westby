import React, { useState } from "react";
import { galleryData } from "../GalleryData/GalleryData";
import * as S from "./Series.styles";
import {
  SectionHeaderContainer,
  SectionHeaderContent,
  SectionHeaderLine,
  SectionHeaderText,
} from "../Films/Films.styles";

const PRIORITY_GROUPS = {
  1: "Costume Designer",
  2: "Assistant Costume Designer",
  3: "Costume Department",
} as const;

const Series: React.FC = () => {
  // Extract first year from year range (e.g., "2019-2021" becomes 2019)
  const getFirstYear = (yearString: string): number => {
    return parseInt(yearString.split("-")[0]);
  };

  // Group and sort series by priority and year
  const groupedSeries = React.useMemo(() => {
    const groups = new Map<number, typeof galleryData.series>();

    // Initialize groups
    Object.keys(PRIORITY_GROUPS).forEach((priority) => {
      groups.set(Number(priority), []);
    });

    // Sort series into priority groups
    galleryData.series.forEach((show) => {
      const priorityGroup = groups.get(show.rolePriority!) || groups.get(3)!;
      priorityGroup.push(show);
    });

    // Sort each group by year (most recent first)
    groups.forEach((shows, priority) => {
      shows.sort((a, b) => getFirstYear(b.year) - getFirstYear(a.year));
    });

    return groups;
  }, []);
  // Component for section header
  const SectionHeader = ({ title }: { title: string }) => (
    <SectionHeaderContainer>
      <SectionHeaderLine />
      <SectionHeaderContent>
        <SectionHeaderText>{title}</SectionHeaderText>
      </SectionHeaderContent>
      <SectionHeaderLine />
    </SectionHeaderContainer>
  );

  // Component for series grid section
  const SeriesSection = ({ shows }: { shows: typeof galleryData.series }) => (
    <S.GalleryGrid>
      {shows.map((show, index) => (
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
  );

  return (
    <S.Container>
      <S.Title>Series</S.Title>

      {Array.from(groupedSeries.entries())
        .sort(([a], [b]) => a - b)
        .map(([priority, shows]) =>
          shows.length > 0 ? (
            <React.Fragment key={priority}>
              <SectionHeader
                title={
                  PRIORITY_GROUPS[priority as keyof typeof PRIORITY_GROUPS]
                }
              />
              <SeriesSection shows={shows} />
            </React.Fragment>
          ) : null
        )}
    </S.Container>
  );
};

export default Series;
