import React from "react"
import PropTypes from "prop-types"
import style from "../../sass/cards.module.sass"

const CardInfo = ({overline, title, body}) => (
  <div className={style.cardInfo}>
    <small className="overline">{overline}</small>
    <h2 className="h4">{title}</h2>
    <p>{body}</p>
  </div>
)

CardInfo.propTypes = {
  overline: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

CardInfo.defaultProps = {
  overline: `Overline`,
  title: 'This is the card title.',
  body: 'This is the default body of the prop. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.'
}

export default CardInfo
