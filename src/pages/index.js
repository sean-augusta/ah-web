import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import Navigation from "../components/navigation/navigationOnImage"
import SEO from "../components/seo"
import style from "../sass/index.module.sass"
// import CardInfo from "../components/cards/cardInfo"
// import CardInfoAndArticles from "../components/cards/cardInfoAndArticles"
import FullWidthSection from "../components/sections/fullWidthSection"
import { RichText } from 'prismic-reactjs'
import Img from "gatsby-image"
import ContactFormInline from "../components/contact_form"

const IndexPage = ({ data }) =>{
  const page = data.prismic.allHomes.edges.slice(0,1).pop();
  if(!page) return null;
  return (
  <Layout>
    <Navigation />
    <SEO 
      title={page.node.seo_title}
      description={page.node.seo_description}
      keywords={page.node.seo_keywords}
      ogImage={page.node.og_image.url}
    />
    <section className={style.header}>
      <div className={style.headerContent}>
        <h1 className="h2">{RichText.asText(page.node.title)}</h1>
        <h2 className="h6">{RichText.asText(page.node.subtitle)}</h2>
        <a className={style.cta} href="#footer">Contact us</a>
      </div>
      <div className={style.scroll}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
        </svg>
      </div>
      <div className={style.overlay}></div>
      <Img className={style.heroImg} fluid={page.node.hero_imageSharp.childImageSharp.fluid} alt={page.node.hero_image.alt}/>
    </section>
    <section className={style.homePageContent}>
      <FullWidthSection 
        title={'Touchless engagement &amp; live video streaming'}
        body={'We work with companies ranging from startups, to mid-size corporations, to large enterprises.'}
        image={page.node.hero_imageSharp.childImageSharp.fluid}
        imageAlt={page.node.hero_image.alt}>
      </FullWidthSection>
    </section>
    <ContactFormInline />
  </Layout>
)
}

export default IndexPage

export const query = graphql`
  {
    prismic {
      allHomes {
        edges {
          node {
            seo_title
            seo_description
            seo_keywords
            og_image
            page_name
            title
            subtitle
            hero_image
            hero_imageSharp {
              childImageSharp {
                fluid  {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`