import React from "react";

const SITE_NAME = "Teresa Binder Westby";
const SITE_URL = "https://teresabinderwestby.com";
const DEFAULT_DESCRIPTION =
  "Teresa Binder Westby is a costume designer for film and television, with credits including Equity, Special Ops: Lioness, Creed, Unbreakable, Signs, and National Treasure.";

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
}

export const Seo = ({ title, description, pathname }: SeoProps) => {
  const fullTitle = title
    ? `${title} — ${SITE_NAME} | Costume Designer`
    : `${SITE_NAME} | Costume Designer`;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${pathname || "/"}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <style>{`
        html, body, #___gatsby {
          background: rgb(15, 15, 15) !important;
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }
      `}</style>
    </>
  );
};

export const Head = () => <Seo />;
