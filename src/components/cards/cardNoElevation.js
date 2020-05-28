import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import style from "../../sass/components/cards/cards.module.sass"
import Img from "gatsby-image"

const CardNoElevation = ({image, alt, title, body, linkTo}) => (
  <div className={style.cardNoElevationWrapper}>
    <Img className={style.image} fluid={image} alt={alt}/>
    <h5 className={`h6 ${style.title}`}>{title}</h5>
    <p>{body}</p>
    {linkTo ? <Link to={linkTo} className={`btn btn-primary-ghost`}>See More &#x2794;</Link> : null}
  </div>
)

CardNoElevation.propTypes = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  linkTo: PropTypes.string
}

CardNoElevation.defaultProps = {
  alt: `Image alt text`,
  title: `This is the card title.`,
  body: `This is the default body of the prop. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.`,
}

export default CardNoElevation
