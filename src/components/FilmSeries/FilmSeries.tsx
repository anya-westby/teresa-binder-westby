import React, { useState } from "react";
import { galleryData } from "../GalleryData/GalleryData";
import * as S from "./FilmSeries.styles";
// Define priority groups for both categories
const FILM_PRIORITY_GROUPS = {
  1: "Costume Designer",
  2: "Assistant Costume Designer",
  3: "Personal Costumer",
  4: "Costume Department",
} as const;

const SERIES_PRIORITY_GROUPS = {
  1: "Costume Designer",
  2: "Assistant Costume Designer",
  3: "Costume Department",
} as const;

// Combined priority groups for the "All" tab
const ALL_PRIORITY_GROUPS = {
  1: "Costume Designer",
  2: "Assistant Costume Designer",
  3: "Personal Costumer",
  4: "Costume Department",
} as const;

const FilmSeries: React.FC = () => {
  // State for toggling between Film and Series
  const [activeTab, setActiveTab] = useState<"all" | "film" | "series">("all");

  // Extract first year from year range (e.g., "2019-2021" becomes 2019)
  const getFirstYear = (yearString: string): number => {
    return parseInt(yearString.split("-")[0]);
  };

  // Group films by priority
  const groupedFilms = React.useMemo(() => {
    const groups = new Map<number, typeof galleryData.film>();

    // Initialize groups
    Object.keys(FILM_PRIORITY_GROUPS).forEach((priority) => {
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

  // Group and sort series by priority and year
  const groupedSeries = React.useMemo(() => {
    const groups = new Map<number, typeof galleryData.series>();

    // Initialize groups
    Object.keys(SERIES_PRIORITY_GROUPS).forEach((priority) => {
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

  // Combine film and series data for the "All" tab
  const groupedAll = React.useMemo(() => {
    const groups = new Map<
      number,
      Array<
        | (typeof galleryData.film)[0]
        | ((typeof galleryData.series)[0] & { type: "film" | "series" })
      >
    >();

    // Initialize groups
    Object.keys(ALL_PRIORITY_GROUPS).forEach((priority) => {
      groups.set(Number(priority), []);
    });

    // Add films to combined groups
    galleryData.film.forEach((film) => {
      const priorityGroup = groups.get(film.rolePriority) || groups.get(4)!;
      priorityGroup.push({
        ...film,
        type: "film",
      } as (typeof galleryData.film)[0] & { type: "film" });
    });

    // Add series to combined groups
    galleryData.series.forEach((show) => {
      const priorityGroup = groups.get(show.rolePriority!) || groups.get(4)!;
      priorityGroup.push({
        ...show,
        type: "series",
      } as (typeof galleryData.series)[0] & { type: "series" });
    });

    // Sort each group by year (most recent first)
    groups.forEach((items, priority) => {
      items.sort((a, b) => {
        const yearA = a.year.includes("-")
          ? getFirstYear(a.year)
          : parseInt(a.year);
        const yearB = b.year.includes("-")
          ? getFirstYear(b.year)
          : parseInt(b.year);
        return yearB - yearA;
      });
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

  // Component for combined grid section
  const CombinedSection = ({
    items,
  }: {
    items: Array<(typeof galleryData.film)[0] | (typeof galleryData.series)[0]>;
  }) => (
    <S.GalleryGrid>
      {items.map((item, index) => (
        <S.GalleryItem key={index}>
          <S.ImageContainer>
            <img src={item.imgSrc} alt={item.title} loading="lazy" />
          </S.ImageContainer>
          <S.ItemOverlay>
            <S.ContentWrapper>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemRole>{item.role}</S.ItemRole>
              <S.YearContainer>
                <S.Divider />
                <S.Year>{item.year}</S.Year>
              </S.YearContainer>
            </S.ContentWrapper>
          </S.ItemOverlay>
        </S.GalleryItem>
      ))}
    </S.GalleryGrid>
  );

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>Film + Series</S.Title>
        <S.TabsContainer>
          <S.TabButton
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
          >
            All
          </S.TabButton>
          <S.TabButton
            active={activeTab === "film"}
            onClick={() => setActiveTab("film")}
          >
            Film
          </S.TabButton>
          <S.TabButton
            active={activeTab === "series"}
            onClick={() => setActiveTab("series")}
          >
            Series
          </S.TabButton>
        </S.TabsContainer>
      </S.HeaderContainer>

      {activeTab === "all" ? (
        <>
          {Array.from(groupedAll.entries())
            .sort(([a], [b]) => a - b)
            .map(([priority, items]) =>
              items.length > 0 ? (
                <React.Fragment key={priority}>
                  <SectionHeader
                    title={
                      ALL_PRIORITY_GROUPS[
                        priority as keyof typeof ALL_PRIORITY_GROUPS
                      ]
                    }
                  />
                  <CombinedSection items={items} />
                </React.Fragment>
              ) : null
            )}
        </>
      ) : activeTab === "film" ? (
        <>
          {Array.from(groupedFilms.entries())
            .sort(([a], [b]) => a - b)
            .map(([priority, films]) =>
              films.length > 0 ? (
                <React.Fragment key={priority}>
                  <SectionHeader
                    title={
                      FILM_PRIORITY_GROUPS[
                        priority as keyof typeof FILM_PRIORITY_GROUPS
                      ]
                    }
                  />
                  <FilmSection films={films} />
                </React.Fragment>
              ) : null
            )}
        </>
      ) : (
        <>
          {Array.from(groupedSeries.entries())
            .sort(([a], [b]) => a - b)
            .map(([priority, shows]) =>
              shows.length > 0 ? (
                <React.Fragment key={priority}>
                  <SectionHeader
                    title={
                      SERIES_PRIORITY_GROUPS[
                        priority as keyof typeof SERIES_PRIORITY_GROUPS
                      ]
                    }
                  />
                  <SeriesSection shows={shows} />
                </React.Fragment>
              ) : null
            )}
        </>
      )}
    </S.Container>
  );
};

export default FilmSeries;
