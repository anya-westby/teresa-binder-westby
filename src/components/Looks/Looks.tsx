import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { looksData } from "../LooksData/LooksData";
import {
  ArrowIcon,
  Eyebrow,
  Meta,
  PageIntro,
  PageTitle,
  Pill,
  PillGroup,
  Toolbar,
  tones,
} from "../../styledComponents/globals";
import * as S from "./Looks.styles";

const productions = ["All", ...Array.from(new Set(looksData.map((l) => l.production)))];

const Looks: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(
    () => looksData.filter((l) => filter === "All" || l.production === filter),
    [filter]
  );

  const step = (dir: 1 | -1) =>
    setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open === null, items.length]);

  const current = open === null ? null : items[open];

  return (
    <>
      <PageIntro>
        <Eyebrow>Gallery</Eyebrow>
        <PageTitle>Looks</PageTitle>
        <Toolbar $delay={0.3}>
          <PillGroup role="group" aria-label="Filter by project">
            {productions.map((p) => (
              <Pill
                key={p}
                type="button"
                $on={filter === p}
                aria-pressed={filter === p}
                onClick={() => setFilter(p)}
              >
                {p}
              </Pill>
            ))}
          </PillGroup>
          <Meta>{items.length} looks</Meta>
        </Toolbar>
      </PageIntro>

      <S.Gallery>
        <S.Masonry key={filter}>
          {items.map((l, i) => (
            <S.Card
              key={l.id}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Enlarge ${l.caption}, ${l.production}`}
            >
              <img
                src={l.imgSrc}
                alt={`${l.caption} in ${l.production}`}
                loading="lazy"
                style={{ background: tones[i % tones.length] }}
              />
              <S.Overlay>
                <S.Name>{l.caption}</S.Name>
                <S.Production>
                  {l.production} · {l.year}
                </S.Production>
              </S.Overlay>
            </S.Card>
          ))}
        </S.Masonry>
      </S.Gallery>

      {current && (
        <S.Lightbox
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setOpen(null)}
        >
          <S.LightboxBar>
            <span>
              {open! + 1} / {items.length}
            </span>
            <S.IconButton type="button" onClick={() => setOpen(null)} autoFocus>
              Close
            </S.IconButton>
          </S.LightboxBar>
          <S.IconButton
            type="button"
            aria-label="Previous look"
            style={{ transform: "scaleX(-1)" }}
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <ArrowIcon />
          </S.IconButton>
          <S.LightboxImage onClick={(e) => e.stopPropagation()}>
            <img src={current.imgSrc} alt={`${current.caption} in ${current.production}`} />
            <figcaption>
              <S.Name>{current.caption}</S.Name>
              <S.Production>
                {current.production} · {current.year}
              </S.Production>
            </figcaption>
          </S.LightboxImage>
          <S.IconButton
            type="button"
            aria-label="Next look"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <ArrowIcon />
          </S.IconButton>
        </S.Lightbox>
      )}
    </>
  );
};

export default Looks;
