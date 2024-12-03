
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/anyawestby/Documents/teresa-binder-westby/.cache/dev-404-page.js")),
  "component---src-pages-contact-tsx": preferDefault(require("/Users/anyawestby/Documents/teresa-binder-westby/src/pages/contact.tsx")),
  "component---src-pages-films-tsx": preferDefault(require("/Users/anyawestby/Documents/teresa-binder-westby/src/pages/films.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/anyawestby/Documents/teresa-binder-westby/src/pages/index.tsx")),
  "component---src-pages-series-tsx": preferDefault(require("/Users/anyawestby/Documents/teresa-binder-westby/src/pages/series.tsx"))
}

