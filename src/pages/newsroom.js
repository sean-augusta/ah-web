import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layouts/layout"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo"
import style from "../sass/pages/index.module.sass"

// import { RichText } from 'prismic-reactjs'
// import Img from "gatsby-image"
import ContactFormInline from "../components/contact_form"

const NewsroomPage = ({ data }) =>{
  // const page = data.prismic.allHomes.edges.slice(0,1).pop();
  // if(!page) return null;
  const posts = data.prismic.allNewsroom_posts.edges;
  if(!posts) return null;
  return (
  <Layout>
    <Navigation onImage={true}/>
    <SEO 
      title={`page.node.seo_title`}
      description={`page.node.seo_description ? page.node.seo_description : null`}
      keywords={`page.node.seo_keywords ? page.node.seo_keywords : null`}
      ogImage={`page.node.og_image ? page.node.og_image.url : null`}
    />
    <section className={style.header}>
      <div className={style.headerContent}>
        {/* <h1 className="h2">{RichText.asText(page.node.title)}</h1>
        <h2 className="h6">{RichText.asText(page.node.subtitle)}</h2> */}
        <a className={style.cta} href="#footer">Contact us</a>
      </div>
      <div className={style.scroll}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
        </svg>
      </div>
      <div className={style.overlay}></div>
      {/* <Img className={style.heroImg} fluid={page.node.hero_imageSharp.childImageSharp.fluid} alt={page.node.hero_image.alt}/> */}
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