import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo"
import style from "../sass/pages/subpage.module.sass"
import { RichText } from 'prismic-reactjs'
import FullWidthSection from "../components/sections/fullWidthSection"


const ProductPage = ({ data }) =>{
  const page = data.prismic.product_page;
  if(!page) return null;
  return (
  <Layout>
    <Navigation onImage={true}/>
    <SEO 
      title={page.seo_title}
      description={page.seo_description ? page.seo_description : null}
      keywords={page.seo_keywords ? page.seo_keywords : null}
      ogImage={page.og_image ? page.og_image.url : null}
    />
    <section className={style.subpageHeader}>
      <div className={style.headerContent}>
        <h6 className={`subtitle1`}>Industries</h6>
        <h1 className={`h2`}>{RichText.asText(page.page_name)}</h1>
      </div>
    </section>
    <section className={style.homePageContent}>
      <div className={style.fullBleed}>  
        <FullWidthSection
          type={page.full_bleed_section_type}
          title={page.full_bleed_section_title}
          body={page.full_bleed_section_body}
          image={page.full_bleed_section_imageSharp.childImageSharp.fluid}
          imageAlt={page.full_bleed_section_image.alt}
          linkTo={page.full_bleed_section_link}
        >
        </FullWidthSection>
      </div>
    </section>
    {page.full_width_sections.map(function (full_width_section, index) {
      return(
        <section className={style.homePageContent}>
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
        </section>
      )
    })}
  </Layout>
)
}

export default ProductPage

export const query = graphql`
  query ($uid: String!) {
    prismic {
      product_page(lang: "en-us", uid: $uid) {
        _meta {
          uid
        }
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
        full_bleed_section_type
        og_image
        page_name
        seo_description
        seo_keywords
        full_width_sections {
          full_width_section_body
          full_width_section_image
          full_width_section_imageSharp {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          full_width_section_link
          full_width_section_title
          full_width_section_type
        }
      }
    }
  }
`