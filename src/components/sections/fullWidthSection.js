import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import style from "../../sass/components/sections/fullWidthSection.module.sass"
import Img from "gatsby-image"
import { RichText } from 'prismic-reactjs'

const FullWidthSection = ({image, imageAlt, title, body, linkTo, type}) => {
  if (type === "Triangle"){
    return (
      <div className={style.sectionFullWidth + ' ' + style.triangle}>
        <div className={style.sectionBody}>
          <h3 className="h4">{title}</h3>
          <span className={'headerUnderline'}></span>
          {RichText.render(body)}
          {linkTo ? <Link to={linkTo} className="btn btn-primary-ghost">Read More &#x2794;</Link> : null}
        </div>
        <div className={style.imageWrapper}>
          <Img className={style.image} fluid={image} alt={imageAlt}/>
          <Img className={style.imageDuplicate} fluid={image} alt={imageAlt}/>
        </div>
      </div>
    )
  } if (type === "Rectangle") {
    return (
      <div className={style.sectionFullWidth + ' ' + style.rectangle}>
        <div className={style.sectionBody}>
          <h3 className="h4">{title}</h3>
          <span className={'headerUnderline'}></span>
          {RichText.render(body)}
          {linkTo ? <Link to={linkTo} className="btn btn-primary-ghost">Read More &#x2794;</Link> : null}
        </div>
        <div className={style.imageWrapper}>
          <Img className={style.image} fluid={image} alt={imageAlt}/>
          <Img className={style.imageDuplicate} fluid={image} alt={imageAlt}/>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

FullWidthSection.propTypes = {
  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
  linkTo: PropTypes.string,
  type: PropTypes.string.isRequired,
}

FullWidthSection.defaultProps = {
  type: `Triangle`,
  title: `This is the card title.`,
  body: `This is the default body of the prop. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.`,
}

export default FullWidthSection
