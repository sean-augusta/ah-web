import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo"
import style from "../sass/pages/innovation.module.sass"
import FullWidthSection from "../components/sections/fullWidthSection"
import FullBleedDivider from "../components/sections/fullBleedDivider"
import { RichText } from 'prismic-reactjs'
import Img from "gatsby-image"
import ContactFormInline from "../components/contact_form"

const InnovationPage = ({ data }) =>{
  const page = data.prismic.allInnovations.edges.slice(0,1).pop();
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
    <section className={style.header}>
      <div className={style.headerContent}>
        <h1 className="h2">{RichText.asText(page.node.quote)}</h1>
        <h2 className="h6">{RichText.asText(page.node.author)}</h2>
      </div>
      <div className={style.overlay}></div>
      <Img className={style.heroImg} fluid={page.node.hero_imageSharp.childImageSharp.fluid} alt={page.node.hero_image.alt}/>
    </section>
    <section className={style.homePageContent}>
      <div className={style.fullBleed}>  
        <FullWidthSection
          type={page.node.full_bleed_section_type}
          title={page.node.full_bleed_section_title}
          body={page.node.full_bleed_section_body}
          image={page.node.full_bleed_section_imageSharp.childImageSharp.fluid}
          imageAlt={page.node.full_bleed_section_image.alt}
          linkTo={page.node.full_bleed_section_link}
        >
        </FullWidthSection>
      </div>
    </section>
    <FullBleedDivider
      image={page.node.full_bleed_divider_imageSharp.childImageSharp.fluid}
      imageAlt={page.node.full_bleed_divider_image.alt}
      title={page.node.full_bleed_divider_title}
    >
    </FullBleedDivider>
    <section className={style.homePageContent}>
      {page.node.full_width_sections.map(function (full_width_section, index) {
          return(
            <FullWidthSection
              key={index}
              type={full_width_section.full_width_section_type}
              title={full_width_section.full_width_section_title}
              body={full_width_section.full_width_section_body}
              image={full_width_section.full_width_section_imageSharp.childImageSharp.fluid}
              imageAlt={full_width_section.full_width_section_image.alt}
              linkTo={full_width_section.full_width_section_link}
            >
            </FullWidthSection>
          )
        })
      }
    </section>
    <ContactFormInline />
  </Layout>
)
}

export default InnovationPage

export const query = graphql`
  {
    prismic {
      allInnovations {
        edges {
          node {
            seo_title
            seo_description
            seo_keywords
            og_image
            page_name
            quote
            author
            hero_image
            hero_imageSharp {
              childImageSharp {
                fluid  {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            full_bleed_section_type
            full_bleed_section_body
            full_bleed_section_image
            full_bleed_section_imageSharp {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            full_bleed_section_link
            full_bleed_section_title
            full_bleed_divider_image
            full_bleed_divider_imageSharp {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            full_bleed_divider_title
            full_width_sections {
              full_width_section_type
              full_width_section_image
              full_width_section_imageSharp {
                childImageSharp {
                  fluid  {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              full_width_section_title
              full_width_section_body
              full_width_section_link
            }
          }
        }
      }
    }
  }
`