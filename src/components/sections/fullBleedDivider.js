import React from "react"
import PropTypes from "prop-types"
import style from "../../sass/components/sections/fullBleedDivider.module.sass"
import Img from "gatsby-image"

const FullBleedDivider = ({image, imageAlt, title}) => {
    return (
      <div className={style.fullBleedDivider}>
        <Img className={style.image} fluid={image} alt={imageAlt}/>
        <h2>{title}</h2>
      </div>
    )
  }

FullBleedDivider.propTypes = {
  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

FullBleedDivider.defaultProps = {
  title: `This is the card title.`,
}

export default FullBleedDivider