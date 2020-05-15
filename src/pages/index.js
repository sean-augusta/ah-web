import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import SEO from "../components/seo"
import style from "../sass/index.module.sass"
import CardInfo from "../components/cards/cardInfo"
import CardInfoAndArticles from "../components/cards/cardInfoAndArticles"
import { RichText } from 'prismic-reactjs'
import Img from "gatsby-image"

const IndexPage = ({ data }) =>{
  const page = data.prismic.allHomes.edges.slice(0,1).pop();
  if(!page) return null;
  return (
  <Layout>
    <Navigation className="onImage"/>
    <SEO title={RichText.asText(page.node.page_name)} />
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
      <CardInfo
        overline={"AH Labs"}
        title={"There's a lot of NOISE around innovation leading to disruption."}
        body={"There are challenges to adopting emerging technologies, but creates opportunities. What is blockchain? Do we have the right use case for blockchain? How will AI transform and reinvent our business? How do we assess the trends and shifts in emerging technologies? Find out how we can help turn noise into measurable outcomes. Learn More."}
        linkTo={"/"}
      />
      <h2 className={style.sectionTitle}>Blockchain</h2>
      <CardInfoAndArticles
        overline={"Blockchain"}
      />
      <h2 className={style.sectionTitle}>Artificial Intelligence</h2>
      <CardInfo
      />
      <h2 className={style.sectionTitle}>Robotic Process Automation</h2>
      <CardInfo
      />
      <CardInfo
      />
      <h2 className={style.sectionTitle}>C-Suite</h2>
      <CardInfo
      />
    </section>

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