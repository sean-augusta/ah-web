import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layouts/layout"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo"
import style from "../sass/pages/newsroom.module.sass"
import { RichText } from 'prismic-reactjs'
import Img from "gatsby-image"


const NewsroomPage = ({ data }) =>{
  const page = data.prismic.allNewsrooms.edges.slice(0,1).pop();
  if(!page) return null;
  const posts = data.prismic.allNewsroom_posts.edges;
  if(!posts) return null;
  return (
  <Layout>
    <Navigation onImage={true}/>
    <SEO 
      title={page.node.seo_title}
      description={page.node.seo_description ? page.node.seo_description : null}
      keywords={page.node.seo_keywords ? page.node.seo_keywords : null}
      ogImage={page.node.og_image ? page.node.og_image.url : null}
    />
    <section className={style.subpageHeader}>
      <div className={style.headerContent}>
        <h1 className="h2">{RichText.asText(page.node.title)}</h1>
      </div>
    </section>
    <section className={style.postsContainer}>
    {posts.map(function (post, index) {
      return(
      <Link className={style.postWrapper} key={index} to={`newsroom/${post.node._meta.uid}`}>
        <Img className={style.postThumbnail} fluid={post.node.post_hero_imageSharp.childImageSharp.fluid} alt={post.node.post_hero_image.alt} />
        <div className={style.postContent}>
          <h2 className={`${style.postTitle} h6`}>{RichText.asText(post.node.post_title)}</h2>
          <p className={`${style.postCTA} btn btn-primary-ghost`}>Read More &#x2794;</p>
        </div>
      </Link>
      )
    })}
    </section>
  </Layout>
)
}

export default NewsroomPage

export const query = graphql`
  {
    prismic {
      allNewsrooms {
        edges {
          node {
            title
            subtitle
            seo_title
            seo_keywords
            seo_description
            page_name
            og_image
            og_imageSharp {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNewsroom_posts {
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
          }
        }
      }
    }
  }
`