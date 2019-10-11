module.exports = {
  siteMetadata: {
    title: `Augusta HiTech`,
    description: `Experts in blockchain technology solutions, product development, enterprise mobile application development, artificial intelligence, Internet of things for various domains.`,
    author: `@Augusta_Hitech`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
        name: `Augusta HiTech`,
        short_name: `AH`,
        start_url: `/`,
        background_color: `#1F2127`,
        theme_color: `#006FF6`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
