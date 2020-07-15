module.exports = {
  siteMetadata: {
    title: `Tailwind Baseline`,
    description: `Align text to baseline in Tailwind CSS.`,
    author: `@apkoponen`,
    siteUrl: 'https://tailwind-baseline.js.org',
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `tailwind-baseline`,
        description: `Align text to baseline in Tailwind CSS`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-baseline-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
