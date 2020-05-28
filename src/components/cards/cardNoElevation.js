import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import style from "../../sass/components/cards/cards.module.sass"
import Img from "gatsby-image"

const CardNoElevation = ({image, alt, title, subtitle, body, linkTo}) => (
  <div className={style.cardNoElevationWrapper}>
    {image && <Img className={style.image} fluid={image} alt={alt}/>}
    <h5 className={`h6 ${style.title}`}>{title}</h5>
    {subtitle && <h6 className={`subtitle2 ${style.subtitle}`}>{subtitle}</h6>}
    <p className={`body1 ${style.body}`}>{body}</p>
    {linkTo ? <Link to={linkTo} className={`btn btn-primary-ghost`}>See More &#x2794;</Link> : null}
  </div>
)

CardNoElevation.propTypes = {
  image: PropTypes.object,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  body: PropTypes.string,
  linkTo: PropTypes.string
}

CardNoElevation.defaultProps = {
  alt: `Image alt text`,
  title: `This is the card title.`,
  body: `This is the default body of the prop. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
}

export default CardNoElevation
