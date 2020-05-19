import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import style from "../../sass/components/sections/fullWidthSection.module.sass"
import Img from "gatsby-image"

const FullWidthSection = ({image, imageAlt, title, body, linkTo}) => (
  <div className={style.sectionFullWidth}>
    <div className={style.sectionBody}>
      <h3 className="h4">{title}</h3>
      <span className={style.divider}></span>
      <p>{body}</p>
      <Link to={linkTo} className="btn btn-primary-ghost">Read More</Link>
    </div>
    <div className={style.imageWrapper}>
      <Img className={style.imageTri} fluid={image} alt={imageAlt}/>
      <Img className={style.imageTriDuplicate} fluid={image} alt={imageAlt}/>
    </div>
  </div>
)

FullWidthSection.propTypes = {
  image: PropTypes.isRequired,
  imageAlt: PropTypes.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  linkTo: PropTypes.string
}

FullWidthSection.defaultProps = {
  title: `This is the card title.`,
  body: `This is the default body of the prop. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.`,
  linkTo: `/`,
}

export default FullWidthSection
