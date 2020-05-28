import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/layout"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo"
import style from "../sass/pages/subpage.module.sass"
import FullWidthSection from "../components/sections/fullWidthSection"
import CardNoElevation from "../components/cards/cardNoElevation"
import PostCard from "../components/cards/postCard"
import { RichText } from 'prismic-reactjs'

const IndustriesPage = ({ data }) =>{
  const page = data.prismic.allIndustriess.edges.slice(0,1).pop();
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
    <section>  
        <FullWidthSection
          type={page.node.full_bleed_section_type}
          title={page.node.full_bleed_section_title}
          body={page.node.full_bleed_section_body}
          image={page.node.full_bleed_section_imageSharp.childImageSharp.fluid}
          imageAlt={page.node.full_bleed_section_image.alt}
          linkTo={page.node.full_bleed_section_link}
        >
        </FullWidthSection>
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
    <section className={style.suggestedPosts}>
        <h2 className={`h4`}>Suggested Articles</h2>
        <span className={'headerUnderline'}></span>
        <div className={style.postsContainer}>
          <PostCard
            url={`newsroom/${page.node.suggested_post_one._meta.uid}`}
            image={page.node.suggested_post_one.post_hero_imageSharp.childImageSharp.fluid}
            alt={page.node.suggested_post_one.post_hero_image.alt}
            title={RichText.asText(page.node.suggested_post_one.post_title)}
          />
          <PostCard
            url={`newsroom/${page.node.suggested_post_two._meta.uid}`}
            image={page.node.suggested_post_two.post_hero_imageSharp.childImageSharp.fluid}
            alt={page.node.suggested_post_two.post_hero_image.alt}
            title={RichText.asText(page.node.suggested_post_two.post_title)}
          />
          <PostCard
            url={`newsroom/${page.node.suggested_post_three._meta.uid}`}
            image={page.node.suggested_post_three.post_hero_imageSharp.childImageSharp.fluid}
            alt={page.node.suggested_post_three.post_hero_image.alt}
            title={RichText.asText(page.node.suggested_post_three.post_title)}
          />
        </div>
      </section>
  </Layout>
)
}

export default IndustriesPage

export const query = graphql`
  {
    prismic {
      allIndustriess {
        edges {
          node {
            seo_title
            seo_description
            seo_keywords
            og_image
            page_name
            title
            subtitle
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
            suggested_post_one {
              ... on PRISMIC_Newsroom_post {
                post_title
                _meta {
                  uid
                }
                post_hero_image
                post_hero_imageSharp {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            suggested_post_two {
              ... on PRISMIC_Newsroom_post {
                post_title
                _meta {
                  uid
                }
                post_hero_image
                post_hero_imageSharp {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            suggested_post_three {
              ... on PRISMIC_Newsroom_post {
                post_title
                _meta {
                  uid
                }
                post_hero_image
                post_hero_imageSharp {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`