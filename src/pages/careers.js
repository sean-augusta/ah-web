import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo"
import style from "../sass/pages/subpage.module.sass"
import { RichText } from 'prismic-reactjs'
import CardNoElevation from "../components/cards/cardNoElevation"


const CareersPage = ({ data }) =>{
  const page = data.prismic.allCareers.edges.slice(0,1).pop();
  if(!page) return null;
  const posts = data.prismic.allCareer_posts.edges;
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
        {page.node.subtitle && <h6 className={`subtitle1`}>{RichText.asText(page.node.subtitle)}</h6>}
        <h1 className={`h2`}>{RichText.asText(page.node.title)}</h1>
      </div>
    </section>
    <section className={`${style.pageContent} ${style.aside}`}>
      <div>
        <h3 className={'h4'}>Available Positions</h3>
        <span className={'headerUnderline'}></span>
      </div>
      <div className={style.cardNoElevationContainer}>
        {posts.map(function (edge, index) {
            return(
              <CardNoElevation
                key={index}
                title={RichText.asText(edge.node.title)}
                subtitle={`${edge.node.position_type} • ${edge.node.position_location}`}
                linkTo={`/careers/${edge.node._meta.uid}`} 
                body={RichText.asText(edge.node.duties_and_responsibilities).substring(0,236) + `...`}
              />
            )
          })
        }
      </div>
    </section>
  </Layout>
)
}

export default CareersPage

export const query = graphql`
  {
    prismic {
      allCareers {
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
      allCareer_posts (sortBy: title_ASC) {
        edges {
          node {
            page_name
            title
            _meta {
              uid
            }
            position_type
            position_location
            duties_and_responsibilities
          }
        }
      }
    }
  }
`