import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo"
import style from "../sass/pages/subpage.module.sass"
import CardNoElevation from "../components/cards/cardNoElevation"
import { RichText } from 'prismic-reactjs'

const ServicesPage = ({ data }) =>{
  const page = data.prismic.allServicess.edges.slice(0,1).pop();
  if(!page) return null;
  return (
  <Layout>
    <Navigation onImage={true}/>
    <SEO 
      title={page.node.seo_title}
      description={page.node.seo_description ? page.node.seo_description : null}
      keywords={page.node.seo_keywords}
      ogImage={page.node.og_image ? page.node.og_image.url : null}
    />
    <section className={style.subpageHeader}>
      <div className={style.headerContent}>
        {page.node.subtitle && <h6 className={`subtitle1`}>{RichText.asText(page.node.subtitle)}</h6>}
        <h1 className={`h2`}>{RichText.asText(page.node.title)}</h1>
      </div>
    </section>
    <section className={`${style.pageContent} ${style.aside}`}>
      <div>
        <h3 className={'h4'}>{page.node.card_list_title}</h3>
        <span className={'headerUnderline'}></span>
      </div>
      <div className={style.cardNoElevationContainer}>
        {page.node.card_list_items.map(function (item, index) {
            return(
              <CardNoElevation
                key={index}
                image={item.card_imageSharp.childImageSharp.fluid}
                alt={item.card_image.alt}
                title={item.card_title}
                body={item.card_description}
                linkTo={item.see_more} 
              />
            )
          })
        }
      </div>
    </section>
  </Layout>
)
}

export default ServicesPage

export const query = graphql`
  {
    prismic {
      allServicess {
        edges {
          node {
            seo_title
            seo_description
            seo_keywords
            og_image
            page_name
            title
            subtitle
            card_list_title
            card_list_items {
              card_title
              card_description
              card_image
              card_imageSharp {
                childImageSharp {
                  fluid  {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              see_more
            }
          }
        }
      }
    }
  }
`