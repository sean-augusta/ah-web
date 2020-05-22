import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation/navigation"
import { RichText, Date } from 'prismic-reactjs'
import htmlSerializer from "../utils/htmlSerializer"
import style from "../sass/templates/newsroomPost.module.sass"
import Img from "gatsby-image"

const NewsroomPost = ({ data }) => {
  const months = {
    0: `January`,
    1: `February`,
    2: `March`,
    3: `April`,
    4: `May`,
    5: `June`,
    6: `July`,
    7: `August`,
    8: `September`,
    9: `October`,
    10: `November`,
    11: `December`,
  };
  const post = data.prismic.newsroom_post;
  return (
    <Layout>
      <Navigation onImage={false}/>
      <SEO 
        title={post.seo_title ? post.seo_title : RichText.asText(post.post_title)}
        description={post.seo_description ? post.seo_description : null}
        keywords={post.seo_keywords ? post.seo_keywords : null}
        ogImage={post.og_image ? post.og_image.url : null}
      />
      <section className={style.postHeader}>
        <h1 className={`h4`}>{RichText.asText(post.post_title)}</h1>
        <Link to={'/newsroom'} className={style.author}>
          <div className={style.avatarWrapper}>
            <img className={style.avatar} src={post.post_author.avatar.url} alt={post.post_author.avatar.alt}/>
          </div>
          <small className={`caption`}><span>{post.post_author.name}</span> • {months[Date(post._meta.firstPublicationDate).getMonth()]} {Date(post._meta.firstPublicationDate).getDate()}, {Date(post._meta.firstPublicationDate).getFullYear()}</small>
        </Link>
      </section>
      <section className={style.heroImage}>
        <Img fluid={post.post_hero_imageSharp.childImageSharp.fluid} alt={post.post_hero_image.alt}/>
      </section>
      <section className={style.postBody}>
        <RichText render={post.post_body} htmlSerializer={htmlSerializer}/>
      </section>
      <div className={style.sharePost}>
        <ul>
          <li>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${data.site.siteMetadata.url}/newsroom/${post._meta.uid}`} 
              target="_blank" 
              rel="noreferrer"
              title="Share via Facebook">
              Facebook
            </a>
          </li>
          <li>
            <a 
              href={`https://twitter.com/intent/tweet?text=${data.site.siteMetadata.url}/newsroom/${post._meta.uid} by ${data.site.siteMetadata.author}`} 
              target="_blank" 
              rel="noreferrer"
              title="Share via Twitter">
              Twitter
            </a>
          </li>
          <li>
            <a 
              href={`http://www.linkedin.com/shareArticle?mini=true&url=${data.site.siteMetadata.url}/newsroom/${post._meta.uid}&title=${RichText.asText(post.post_title)}${post.seo_description && `&summary=${post.seo_description}`}&source=${data.site.siteMetadata.url}`}
              target="_blank" 
              rel="noreferrer"
              title="Share via LinkedIn">
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href={`${data.site.siteMetadata.url}/newsroom/${post._meta.uid}`}
              target="_blank" 
              rel="noreferrer"
              onclick="event.preventDefault();" 
              title="Copy Link" 
              class="copy-btn" 
              aria-label="Copied!" 
              data-clipboard-text="{{ page.shortURL }}">
              Copy Link
            </a>
          </li>
       </ul>
      </div>
      <section>

      </section>
    </Layout>
  )
}
export default NewsroomPost

export const pageQuery = graphql`
  query ($uid: String!) {
    site {
      siteMetadata {
        url
        author
      }
    }
    prismic {
      newsroom_post(uid: $uid, lang: "en-us") {
        _meta {
          firstPublicationDate
          lastPublicationDate
          lang
          tags
          type
          uid
        }
        seo_title
        seo_description
        seo_keywords
        og_image
        post_author {
          _linkType
          ... on PRISMIC_Author {
            name
            bio
            avatar
            _meta {
              id
            }
          }
        }
        post_title
        post_hero_image
        post_hero_imageSharp {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        post_body
      }
    }
  }
`