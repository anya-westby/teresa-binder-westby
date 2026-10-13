import * as React from "react";
import { useEffect, useState } from "react";
import { galleryData, youtubeId } from "../GalleryData/GalleryData";
import { Eyebrow, Meta, PageIntro, PageTitle, Rise, theme } from "../../styledComponents/globals";
import * as S from "./Ads.styles";

const ads = galleryData.ads.map((a) => ({ ...a, id: youtubeId(a.imgSrc) }));

export default function Ads() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  // Home page links here as /ads?spot=N
  useEffect(() => {
    const spot = parseInt(new URLSearchParams(window.location.search).get("spot") ?? "");
    if (spot >= 1 && spot <= ads.length) setCurrent(spot - 1);
  }, []);

  const pick = (i: number) => {
    setCurrent(i);
    setPlaying(false);
  };

  const ad = ads[current];
  const years = ads.map((a) => parseInt(a.year));

  return (
    <>
      <PageIntro>
        <Eyebrow>Commercial</Eyebrow>
        <PageTitle>Advertisements</PageTitle>
        <Rise $delay={0.3} style={{ height: 1, background: theme.ink }} />
      </PageIntro>

      <S.Layout>
        <S.StageCol>
          <S.Stage key={ad.id}>
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${ad.id}?autoplay=1&rel=0`}
                title={`${ad.role}: ${ad.title}`}
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <S.Poster
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${ad.role}: ${ad.title}`}
              >
                <img src={`https://i.ytimg.com/vi/${ad.id}/hqdefault.jpg`} alt="" />
                <span className="play">
                  <svg width="26" height="28" viewBox="0 0 26 28" fill="currentColor" aria-hidden="true">
                    <path d="M2 2l22 12L2 26z" />
                  </svg>
                </span>
                <span className="bar">
                  <span>{ad.title}</span>
                  <span>Play</span>
                </span>
              </S.Poster>
            )}
          </S.Stage>
          <S.Caption>
            <h2>
              {ad.role} <em>{ad.year}</em>
            </h2>
            <p>{ad.title}</p>
          </S.Caption>
        </S.StageCol>

        <S.SpotList>
          <Meta>
            {ads.length} spots · {Math.min(...years)}–{Math.max(...years)}
          </Meta>
          {ads.map((a, i) => (
            <S.Spot
              key={a.id}
              type="button"
              $on={i === current}
              aria-pressed={i === current}
              onClick={() => pick(i)}
            >
              <span className="small">{a.year}</span>
              <span className="brand">
                <span className="name">{a.role}</span>
                <span className="sub">{a.title}</span>
              </span>
              <span className="small">
                {String(i + 1).padStart(2, "0")} / {String(ads.length).padStart(2, "0")}
              </span>
            </S.Spot>
          ))}
        </S.SpotList>
      </S.Layout>
    </>
  );
}
