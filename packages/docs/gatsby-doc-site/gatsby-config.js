module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
      resolve: 'gatsby-plugin-react-svg',
    },
    `gatsby-plugin-emotion`,
    {
      options: {
        background_color: `#3ac`,
        display: `standalone`,
        icon: '../../other/assets/logos/waffles/icon.svg', // direct import as cannot use module system here
        name: `Waffles`,
        short_name: `Waffles`,
        start_url: `/`,
        theme_color: `#3ac`,
      },
      resolve: `gatsby-plugin-manifest`,
    },
    `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    author: `@datacamp`,
    description: `The DataCamp design system`,
    title: `Waffles`,
  },
};
