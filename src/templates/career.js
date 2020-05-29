import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/career_layout"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo"
import style from "../sass/pages/subpage.module.sass"
import { RichText } from 'prismic-reactjs'
import CareerApplication from "../components/career_application"


const CareerPage = ({ data }) =>{
  const career = data.prismic.career_post;
  if(!career) return null;
  const page = data.prismic.allCareers.edges.slice(0,1).pop();
  if(!page) return null;
  return (
  <Layout>
    <Navigation onImage={true}/>
    <SEO 
      title={career.seo_title}
      description={career.seo_description ? career.seo_description : null}
      keywords={career.seo_keywords ? career.seo_keywords : null}
      ogImage={career.og_image ? career.og_image.url : null}
    />
    <section className={style.subpageHeader}>
      <div className={style.headerContent}>
        {page.node.subtitle && <h6 className={`subtitle1`}>{RichText.asText(page.node.subtitle)}</h6>}
        <h1 className={`h2`}>{RichText.asText(career.title)}</h1>
      </div>
    </section>
    <div className={style.pageContentWrapper}>
      <section className={style.aside}>
        <div>
          <h3 className={'h4'}>About the Position</h3>
          <span className={'headerUnderline'}></span>
        </div>
        <div>
          {career.position_type ?
            <div className={style.careerContentItemWrapper}>
              <h6 className={`h6`}><b>Position Type</b></h6>
              <p className={`body1`}>{career.position_type}</p>
            </div> 
          : null}
          {career.position_location ?
            <div className={style.careerContentItemWrapper}>
              <h6 className={`h6`}><b>Position Location</b></h6>
              <p className={`body1`}>{career.position_location}</p>
            </div> 
          : null}
          {career.position_shift ?
            <div className={style.careerContentItemWrapper}>
              <h6 className={`h6`}><b>Position Shift</b></h6>
              <p className={`body1`}>{career.position_shift}</p>
            </div> 
          : null}
          {career.duties_and_responsibilities ?
            <div className={style.careerContentItemWrapper}>
              <h6 className={`h6`}><b>Duties and Responsibilities</b></h6>
              {RichText.render(career.duties_and_responsibilities)}
            </div> 
          : null}
          {career.qualifications ?
            <div className={style.careerContentItemWrapper}>
              <h6 className={`h6`}><b>Qualifications</b></h6>
              {RichText.render(career.qualifications)}
            </div> 
          : null}
        </div>
      </section>
    </div>
    <CareerApplication
      positions={data.prismic.allCareer_posts.edges}
      currentPosition={career._meta.uid}
    />
  </Layout>
)
}

export default CareerPage

export const query = graphql`
  query ($uid: String!) {
    prismic {
      career_post(lang: "en-us", uid: $uid) {
        _meta {
          uid
        }
        seo_title
        seo_description
        seo_keywords
        og_image
        title
        position_type
        position_location
        position_shift
        duties_and_responsibilities
        qualifications
      }
      allCareers {
        edges {
          node {
            subtitle

          }
        }
      }
      allCareer_posts {
        edges {
          node {
            title
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`