import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation/navigation"
import { RichText, Date } from 'prismic-reactjs'
import htmlSerializer from "../utils/htmlSerializer"
import style from "../sass/templates/newsroomPost.module.sass"
import Img from "gatsby-image"
import Clipboard from "clipboard"
import $ from "jquery"
import PostCard from "../components/cards/postCard"

const NewsroomPost = ({ data, pageContext }) => {
  const {next, prev} = pageContext;
  if (typeof window !== 'undefined') {
    var clipboard = new Clipboard('.copy-btn');

    clipboard.on('success', function(e) {
      console.log('Successfully copied text!');
      $(e.trigger).addClass(style.tooltipped);
      setTimeout(function() {
        $(e.trigger).removeClass(style.tooltipped);
      }, 2000);
    });

    clipboard.on('error', function(e) {
        alert('That didn\'t work for some reason. You might just have to copy it yourself while we get this figured out :(');
    });
  }

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
              onClick={
                (event) => {
                  event.preventDefault();
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${data.site.siteMetadata.url}/newsroom/${post._meta.uid}`,`mywindow`,`width=500,height=500`)
                }
              }
              aria-label="Facebook"
              target="_blank" 
              rel="noreferrer"
              title="Share via Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="28.188" height="28.017" viewBox="0 0 28.188 28.017">
                <path id="facebook-brands" d="M36.188,22.094a14.094,14.094,0,1,0-16.3,13.923V26.168h-3.58V22.094h3.58V18.989c0-3.532,2.1-5.483,5.323-5.483a21.69,21.69,0,0,1,3.155.275v3.467H26.593a2.037,2.037,0,0,0-2.3,2.2v2.645H28.2l-.625,4.074H24.3v9.849A14.1,14.1,0,0,0,36.188,22.094Z" transform="translate(-8 -8)"/>
              </svg>
            </a>
          </li>
          <li>
            <a 
              href={`https://twitter.com/intent/tweet?text=${data.site.siteMetadata.url}/newsroom/${post._meta.uid} by ${data.site.siteMetadata.author}`} 
              onClick={
                (event) => {
                  event.preventDefault();
                  window.open(`https://twitter.com/intent/tweet?text=${data.site.siteMetadata.url}/newsroom/${post._meta.uid} by ${data.site.siteMetadata.author}`,`mywindow`,`width=500,height=500`)
                }
              }
              aria-label="Twitter"
              target="_blank" 
              rel="noreferrer"
              title="Share via Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="29.097" height="23.632" viewBox="0 0 29.097 23.632">
                <path id="twitter-brands" d="M26.106,53.972c.018.258.018.517.018.775,0,7.884-6,16.967-16.967,16.967A16.852,16.852,0,0,1,0,69.037a12.337,12.337,0,0,0,1.44.074,11.943,11.943,0,0,0,7.4-2.548,5.974,5.974,0,0,1-5.576-4.136,7.521,7.521,0,0,0,1.126.092,6.307,6.307,0,0,0,1.569-.2,5.964,5.964,0,0,1-4.782-5.853V56.39a6.006,6.006,0,0,0,2.7.757,5.972,5.972,0,0,1-1.846-7.976,16.951,16.951,0,0,0,12.3,6.24,6.732,6.732,0,0,1-.148-1.366A5.969,5.969,0,0,1,24.5,49.965a11.741,11.741,0,0,0,3.785-1.44,5.947,5.947,0,0,1-2.622,3.286,11.955,11.955,0,0,0,3.434-.923A12.819,12.819,0,0,1,26.106,53.972Z" transform="translate(0 -48.082)"/>
              </svg>
            </a>
          </li>
          <li>
            <a 
              href={`http://www.linkedin.com/shareArticle?mini=true&url=${data.site.siteMetadata.url}/newsroom/${post._meta.uid}&title=${RichText.asText(post.post_title)}${post.seo_description && `&summary=${post.seo_description}`}&source=${data.site.siteMetadata.url}`}
              onClick={
                (event) => {
                  event.preventDefault();
                  window.open(`http://www.linkedin.com/shareArticle?mini=true&url=${data.site.siteMetadata.url}/newsroom/${post._meta.uid}&title=${RichText.asText(post.post_title)}${post.seo_description && `&summary=${post.seo_description}`}&source=${data.site.siteMetadata.url} by ${data.site.siteMetadata.author}`,`mywindow`,`width=500,height=500`)
                }
              }
              aria-label="LinkedIn"
              target="_blank" 
              rel="noreferrer"
              title="Share via LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="25.46" height="25.459" viewBox="0 0 25.46 25.459">
                <path id="linkedin-in-brands" d="M5.7,25.469H.421v-17H5.7ZM3.057,6.153A3.071,3.071,0,1,1,6.114,3.067,3.083,3.083,0,0,1,3.057,6.153Zm22.4,19.317H20.187V17.195c0-1.972-.04-4.5-2.744-4.5-2.744,0-3.165,2.143-3.165,4.359v8.417H9.005v-17h5.062V10.79h.074a5.546,5.546,0,0,1,4.994-2.745c5.342,0,6.324,3.518,6.324,8.087v9.337Z" transform="translate(0 -0.01)"/>
              </svg>
            </a>
          </li>
          <li>
            <button
              href={`${data.site.siteMetadata.url}/newsroom/${post._meta.uid}`}
              target="_blank" 
              rel="noreferrer"
              title="Copy Link" 
              className={`copy-btn`} 
              aria-label="Copy Link" 
              data-clipboard-text={`${data.site.siteMetadata.url}/newsroom/${post._meta.uid}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="29.097" height="29.097" viewBox="0 0 29.097 29.097">
                <path id="link-solid" d="M18.561,10.535a8.634,8.634,0,0,1,.02,12.2l-.02.021-3.819,3.819A8.638,8.638,0,0,1,2.526,14.354l2.109-2.109a.909.909,0,0,1,1.551.6,10.472,10.472,0,0,0,.551,3,.915.915,0,0,1-.215.944l-.744.744a4.092,4.092,0,1,0,5.75,5.823l3.819-3.818a4.091,4.091,0,0,0,0-5.787,4.257,4.257,0,0,0-.588-.487.911.911,0,0,1-.395-.716,2.264,2.264,0,0,1,.665-1.694l1.2-1.2a.913.913,0,0,1,1.17-.1A8.666,8.666,0,0,1,18.561,10.535Zm8.009-8.01a8.648,8.648,0,0,0-12.216,0L10.535,6.345l-.02.021A8.64,8.64,0,0,0,11.7,19.538a.913.913,0,0,0,1.17-.1l1.2-1.2a2.264,2.264,0,0,0,.665-1.694.911.911,0,0,0-.395-.716,4.257,4.257,0,0,1-.588-.487,4.091,4.091,0,0,1,0-5.787L17.569,5.74a4.092,4.092,0,1,1,5.75,5.823l-.744.744a.915.915,0,0,0-.215.944,10.472,10.472,0,0,1,.551,3,.909.909,0,0,0,1.551.6l2.109-2.109a8.647,8.647,0,0,0,0-12.216Z" transform="translate(0.001 0.001)"/>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <section className={style.authorBioSection}>
        <hr/>
        <div className={style.authorBio}>
          <div className={style.avatarWrapper}>
            <img className={style.avatar} src={post.post_author.avatar.url} alt={post.post_author.avatar.alt}/>
          </div>
          <div className={style.authorContent}>
            <h6 className={`subtitle1`}><b>{post.post_author.name}</b></h6>
            <p className={`body2`}>{post.post_author.bio}</p>
          </div>
        </div>
        <hr/>
      </section>
      <section className={style.pagination}>
        {prev && <Link className={`btn btn-secondary-ghost ${style.prev}`} to={`newsroom/${prev.node._meta.uid}`}>Previous</Link>}
        {next && <Link className={`btn btn-primary ${style.next}`} to={`newsroom/${next.node._meta.uid}`}>Next</Link>}
      </section>
      <section className={style.suggestedPosts}>
        <h2 className={`h4`}>Suggested Articles</h2>
        <span className={'headerUnderline'}></span>
        <div className={style.postsContainer}>
          <PostCard
            url={`newsroom/${post.suggested_post_one._meta.uid}`}
            image={post.suggested_post_one.post_hero_imageSharp.childImageSharp.fluid}
            alt={post.suggested_post_one.post_hero_image.alt}
            title={RichText.asText(post.suggested_post_one.post_title)}
          />
          <PostCard
            url={`newsroom/${post.suggested_post_two._meta.uid}`}
            image={post.suggested_post_two.post_hero_imageSharp.childImageSharp.fluid}
            alt={post.suggested_post_two.post_hero_image.alt}
            title={RichText.asText(post.suggested_post_two.post_title)}
          />
          <PostCard
            url={`newsroom/${post.suggested_post_three._meta.uid}`}
            image={post.suggested_post_three.post_hero_imageSharp.childImageSharp.fluid}
            alt={post.suggested_post_three.post_hero_image.alt}
            title={RichText.asText(post.suggested_post_three.post_title)}
          />
        </div>
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
`