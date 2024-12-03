module.exports = {
    plugins: [
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
          icons: [
            {
              src: `favicon-16x16.png`,
              sizes: `16x16`,
              type: `image/png`,
            },
            {
              src: `favicon-32x32.png`,
              sizes: `32x32`,
              type: `image/png`,
            },
            {
              src: `apple-touch-icon.png`,
              sizes: `180x180`,
              type: `image/png`,
            },
          ],
        },
      },
    ],
  }