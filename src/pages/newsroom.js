import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layouts/layout"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo"
import style from "../sass/pages/newsroom.module.sass"
import { RichText } from 'prismic-reactjs'
// import Img from "gatsby-image"


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
    <section className={style.homePageContent}>
    {posts.map(function (post, index) {
      return(
      <Link key={index} to={`newsroom/${post.node._meta.uid}`}>{post.node._meta.uid}</Link>
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
          }
        }
      }
    }
  }
`