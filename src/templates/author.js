import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo"
import style from "../sass/pages/newsroom.module.sass"
import { RichText } from 'prismic-reactjs'
import PostCard from "../components/cards/postCard"


const AuthorPage = ({ data }) =>{
  const author = data.prismic.author;
  if(!author) return null;
  const posts = data.prismic.allNewsroom_posts.edges;
  if(!posts) return null;
  return (
  <Layout>
    <Navigation onImage={true}/>
    <SEO 
      title={author.seo_title}
      description={author.seo_description ? author.seo_description : null}
      keywords={author.seo_keywords ? author.seo_keywords : null}
      ogImage={author.og_image ? author.og_image.url : null}
    />
    <section className={style.subpageHeader}>
      <div className={style.headerContent}>
        <h1 className="h2">{author.name}</h1>
      </div>
    </section>
    <section className={style.postsContainer}>
    {posts.map(function (post, index) {
      return(
        <PostCard
          key={index}
          url={`newsroom/${post.node._meta.uid}`}
          image={post.node.post_hero_imageSharp.childImageSharp.fluid}
          alt={post.node.post_hero_image.alt}
          title={RichText.asText(post.node.post_title)}
        />
      )
    })}
    </section>
  </Layout>
)
}

export default AuthorPage

export const query = graphql`
  query ($uid: String!, $id: String!) {
    prismic {
      author(lang: "en-us", uid: $uid) {
        _meta {
          uid
        }
        avatar
        bio
        name
        seo_title
        seo_description
        seo_keywords
        og_image
      }
      allNewsroom_posts(where: {author: $id}) {
        edges {
          node {
            _meta {
              uid
            }
            post_title
            post_hero_image
            post_hero_imageSharp {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              _linkType
              ... on PRISMIC_Author {
                name
                avatar
                _meta {
                  id
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
`