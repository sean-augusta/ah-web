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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'ahWeb', // (REQUIRED, replace with your own)
        accessToken: 'MC5YcjJVZnhBQUFDZ3p4UTFV.ee-_ve-_ve-_vUhQeXDvv73vv73vv71D77-977-9OD7vv73vv71d77-977-977-9PgcbY0ltJe-_vV3vv70', // (optional API access token)
        path: '/preview', // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        // pages: [{ // (optional, builds pages dynamically)
        // type: 'Newsroom',         // TypeName from prismic
        // match: '/newsroom/:uid',  // Pages will be generated under this pattern
        // path: '/newsroom/unpub',        // Placeholder page for unpublished documents
        // component: require.resolve('./src/templates/newsroom.js'),
      },
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
