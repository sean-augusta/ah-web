/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import openGraphImageDefault from "../assets/img/ogImage.png"

function SEO({ description, lang, meta, title, ogImage, keywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const openGraphImage = ogImage || openGraphImageDefault
  const keywordsFallback = "Blockchain Technology Solutions, Product Development Companies in the USA, Enterprise Mobile App Development Company, Internet of Things, Artificial Intelligence"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords || keywordsFallback,
        },
        {
          property: `og:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `og:site_name`,
          content: `${site.siteMetadata.title}`,
        },
        {
          property: `og:image`,
          content: openGraphImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: openGraphImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `theme-color`,
          content: `#317EFB`,
        },
        {
          name: `msapplication-navbutton-color`,
          content: `#006FF6`,
        },
        {
          name: `p:domain_verify`,
          content: `77c275a55a85e410bd6eeb43bd6ca228`,
        },
        {
          name: `google-site-verification`,
          content: `ghEuegYajkT13xVgIIFOgf5cLgDkoFTmSguZZMEQbSA`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  description: ``,
  keywords: ``,
  lang: `en-US`,
  ogImage: openGraphImageDefault,
  meta: [],
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.string,
  lang: PropTypes.string,
  ogImage: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
