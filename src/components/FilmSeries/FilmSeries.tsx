import * as React from "react";
import { useMemo, useState } from "react";
import {
  allCredits,
  Credit,
  CreditType,
  firstYear,
  formatYears,
} from "../GalleryData/GalleryData";
import {
  Eyebrow,
  Meta,
  PageIntro,
  PageTitle,
  Pill,
  PillGroup,
  Toolbar,
  tones,
} from "../../styledComponents/globals";
import * as S from "./FilmSeries.styles";

const GROUPS = [
  "Costume Designer",
  "Assistant Costume Designer",
  "Personal Costumer",
  "Costume Department",
] as const;

const FILTERS: { id: "all" | CreditType; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Film", label: "Film" },
  { id: "Series", label: "Series" },
];

// Roles are stored as "Costumer [as Teresa Binder]"; show them with parentheses
const formatRole = (role: string) => role.replace(/\[(.+)\]/, "($1)");

const FilmSeries: React.FC = () => {
  const [filter, setFilter] = useState<"all" | CreditType>("all");

  const credits = useMemo(
    () => allCredits.filter((c) => filter === "all" || c.type === filter),
    [filter]
  );

  const groups = useMemo(() => {
    const byGroup = GROUPS.map((name) => ({ name, items: [] as Credit[] }));
    credits.forEach((c) => byGroup[(c.rolePriority ?? 4) - 1].items.push(c));
    byGroup.forEach((g) => g.items.sort((a, b) => firstYear(b.year) - firstYear(a.year)));
    return byGroup.filter((g) => g.items.length > 0);
  }, [credits]);

  let k = 0;

  return (
    <>
      <PageIntro>
        <Eyebrow>Credits</Eyebrow>
        <PageTitle>
          Film <em>+</em> Series
        </PageTitle>
        <Toolbar $delay={0.3}>
          <PillGroup role="group" aria-label="Filter credits">
            {FILTERS.map((f) => (
              <Pill
                key={f.id}
                type="button"
                $on={filter === f.id}
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </Pill>
            ))}
          </PillGroup>
          <Meta>{credits.length} credits · 1995–2024</Meta>
        </Toolbar>
      </PageIntro>

      <S.List key={filter}>
        {groups.map((g) => (
          <S.Group key={g.name}>
            <S.GroupHead>
              <h2>{g.name}</h2>
              <Meta>{g.items.length} titles</Meta>
            </S.GroupHead>
            <S.Rows>
              {g.items.map((c) => (
                <S.Row key={`${c.type}-${c.title}`}>
                  <img
                    src={c.imgSrc}
                    alt=""
                    loading="lazy"
                    style={{ background: tones[k++ % tones.length] }}
                  />
                  <S.Info>
                    <S.Title>{c.title}</S.Title>
                    <S.Role>{formatRole(c.role)}</S.Role>
                  </S.Info>
                  <S.Year>
                    <span>{c.type}</span>
                    <span>{formatYears(c.year)}</span>
                  </S.Year>
                </S.Row>
              ))}
            </S.Rows>
          </S.Group>
        ))}
      </S.List>
    </>
  );
};

export default FilmSeries;
