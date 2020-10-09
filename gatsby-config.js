const path = require('path')
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Augusta HiTech`,
    description: `Experts in blockchain technology solutions, product development, enterprise mobile application development, artificial intelligence, Internet of things for various domains.`,
    author: `@Augusta_Hitech`,
    url: process.env.SITE_URL,
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_CODE,
        head: true,
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: process.env.PLUGIN_SHARP_MOZ_JPEG,
        stripMetadata: true,
        defaultQuality: process.env.PLUGIN_SHARP_QUALITY,
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'ahWeb', // (REQUIRED, replace with your own)
        accessToken: 'MC5YcjJVZnhBQUFDZ3p4UTFV.ee-_ve-_ve-_vUhQeXDvv73vv73vv71D77-977-9OD7vv73vv71d77-977-977-9PgcbY0ltJe-_vV3vv70', // (optional API access token)
        path: '/preview', // (optional preview path. Default: /preview)
        previews: false, // (optional, activated Previews. Default: false)
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Augusta HiTech`,
        short_name: `AH`,
        start_url: `/`,
        background_color: `#1F2127`,
        theme_color: `#006FF6`,
        display: `minimal-ui`,
        // icon: `src/assets/img/favicon.png`, // This path is relative to the root of the site.
        icon: `src/assets/img/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
