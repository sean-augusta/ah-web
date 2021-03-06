import React from "react"
import PropTypes from "prop-types"
import style from "../../sass/components/cards/postCard.module.sass"
import Img from "gatsby-image"
import {Link} from "gatsby"

const PostCard = ({url, image, alt, title}) => {

  return(
    <Link className={style.postWrapper} to={url}>
      <Img className={style.postThumbnail} fluid={image} alt={alt} />
      <div className={style.postContent}>
        <h2 className={`h6 ${style.postTitle}`}>{title}</h2>
        <p className={`btn btn-primary-ghost ${style.postCTA}`}>Read &#x2794;</p>
      </div>
    </Link>
  )
}

PostCard.defaultProps = {
  title: `Post title`,

}

PostCard.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default PostCard