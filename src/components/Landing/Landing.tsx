import * as React from "react";
import { allCredits, formatYears, galleryData } from "../GalleryData/GalleryData";
import { looksData } from "../LooksData/LooksData";
import { ArrowIcon, Eyebrow, SectionTitle, tones } from "../../styledComponents/globals";
import * as S from "./Landing.styles";

// Lead credits shown on the home page, in display order
const FEATURED = [
  { title: "Lioness", meta: "Series · 2022–24" },
  { title: "Concrete Cowboy" },
  { title: "Equity" },
  { title: "The Mighty Macs" },
  { title: "Tenure" },
  { title: "Shadowboxer" },
];

const LOOK_STRIP_IDS = ["1", "4", "5", "14", "17", "2", "11"];

export default function Landing() {
  const featured = FEATURED.map((f) => {
    const credit = allCredits.find((c) => c.title === f.title)!;
    return {
      ...credit,
      meta: f.meta ?? `${credit.type} · ${formatYears(credit.year)}`,
    };
  });
  const looks = LOOK_STRIP_IDS.map((id) => looksData.find((l) => l.id === id)!);

  return (
    <>
      <S.Hero>
        <Eyebrow>Costume Designer</Eyebrow>
        <S.HeroName>
          Teresa Binder <em>Westby</em>
        </S.HeroName>
        <S.Ruler />
        <S.HeroGrid>
          <S.Lede>
            Costumes for film, television and advertising — from <em>The Sixth Sense</em> to{" "}
            <em>Lioness</em>.
          </S.Lede>
          <S.Facts>
            <span>{allCredits.length} film &amp; series credits</span>
            <span>1995 — 2024</span>
            <span>Costume Designer · Lioness, Concrete Cowboy, Equity</span>
          </S.Facts>
          <S.Btn to="/film-series">
            View credits <ArrowIcon />
          </S.Btn>
        </S.HeroGrid>
      </S.Hero>

      <S.WorkSection>
        <S.SectionHead>
          <SectionTitle>
            Selected work <span>as Costume Designer</span>
          </SectionTitle>
          <S.TextLink to="/film-series">All {allCredits.length} credits</S.TextLink>
        </S.SectionHead>
        <S.TileGrid>
          {featured.map((f, i) => (
            <S.Tile key={f.title} to="/film-series" style={{ background: tones[i % tones.length] }}>
              <img src={f.imgSrc} alt={f.title} loading="lazy" />
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <div className="cap">
                <S.CapTitle>{f.title}</S.CapTitle>
                <S.Small>{f.meta}</S.Small>
              </div>
            </S.Tile>
          ))}
        </S.TileGrid>
      </S.WorkSection>

      <S.LooksSection>
        <S.SectionHead>
          <SectionTitle>Looks</SectionTitle>
          <S.TextLink to="/looks">All {looksData.length} looks</S.TextLink>
        </S.SectionHead>
        <S.Strip>
          {looks.map((l, i) => (
            <S.Look key={l.id} to="/looks">
              <img
                src={l.imgSrc}
                alt={`${l.caption} in ${l.production}`}
                loading="lazy"
                style={{ background: tones[(i + 2) % tones.length] }}
              />
              <S.LookName>{l.caption}</S.LookName>
              <S.LookMeta>
                {l.production} · {l.year}
              </S.LookMeta>
            </S.Look>
          ))}
        </S.Strip>
      </S.LooksSection>

      <S.AdsSection>
        <S.AdsIntro>
          <SectionTitle>Advertising</SectionTitle>
          <p>Commercial work for national brands, 2015 to present.</p>
          <S.Btn to="/ads">
            Watch the spots <ArrowIcon />
          </S.Btn>
        </S.AdsIntro>
        <S.AdList>
          {galleryData.ads.map((a, i) => (
            <S.AdRow key={a.title} to={`/ads?spot=${i + 1}`}>
              <span className="yr">{a.year}</span>
              <span className="brand">
                <span className="name">{a.role}</span>
                <span className="sub">{a.title}</span>
              </span>
              <ArrowIcon />
            </S.AdRow>
          ))}
        </S.AdList>
      </S.AdsSection>
    </>
  );
}
