import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation/navigation"
import { RichText, Date } from 'prismic-reactjs'
import htmlSerializer from "../utils/htmlSerializer"
import style from "../sass/templates/newsroomPost.module.sass"
// import Img from "gatsby-image"

const NewsroomPost = ({ data }) => {
  const post = data.prismic.newsroom_post;
  return (
    <Layout>
      <Navigation onImage={false}/>
      <SEO 
        title={`post.seo_title`}
        description={post.seo_description}
        keywords={post.seo_keywords ? post.seo_keywords : null}
        ogImage={post.og_image ? post.og_image.url : null}
      />
      <h4>{RichText.asText(post.post_title)}</h4>
      {post.post_author.name}
      <h6>{Date(post._meta.firstPublicationDate).getMonth()} {Date(post._meta.firstPublicationDate).getDate()}, {Date(post._meta.firstPublicationDate).getFullYear()}</h6>
      <img height="50px" width="50px" src={post.post_author.avatar.url} alt={post.post_author.avatar.alt}/>
      <section className={style.postBody}>
        <RichText render={post.post_body} htmlSerializer={htmlSerializer}/>
      </section>
    </Layout>
  )
}
export default NewsroomPost

export const pageQuery = graphql`
  query ($uid: String!) {
    prismic {
      newsroom_post(uid: $uid, lang: "en-us") {
        _meta {
          firstPublicationDate
          lastPublicationDate
          lang
          tags
          type
          uid
        }
        seo_title
        seo_description
        seo_keywords
        og_image
        post_author {
          _linkType
          ... on PRISMIC_Author {
            name
            avatar
            _meta {
              id
            }
          }
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
        post_body
      }
    }
  }
`