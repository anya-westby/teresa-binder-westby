module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add displayName in development
        displayName: process.env.NODE_ENV !== 'production',
        // Minify CSS in production
        minify: process.env.NODE_ENV === 'production',
        // Enable SSR
        ssr: true,
        // Prevent FOUC
        topLevelImportPaths: [
          '@xstyled/styled-components',
          '@xstyled/system',
          'styled-components',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Teresa Binder Westby`,
        short_name: `TBW`,
        start_url: `/`,
        background_color: `#0f0f0f`,
        theme_color: `#0f0f0f`,
        display: `standalone`,
        icon: `static/favIcon.png`,
      },
    },
  ],
}