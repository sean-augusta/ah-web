/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      prismic {
        allNewsroom_posts {
          edges {
            node {
              _meta {
                uid
              }
            }
          }
        }
      }
    }
  `)

  const newsroom = path.resolve("src/templates/newsroom.js")

  pages.data.prismic.allNewsroom_posts.edges.forEach(edge => {
    createPage({
      path: `/newsroom/${edge.node._meta.uid}`,
      component: newsroom,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  })
}