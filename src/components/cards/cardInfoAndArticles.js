import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import style from "../../sass/components/cards/cards.module.sass"

const CardInfo = ({overline, title, body, linkTo}) => (
  <div className={style.cardInfoAndArticlesWrapper}>
    <div className={style.info}>
      <small className="overline">{overline}</small>
      <Link className={style.h4 + " h4"} to={linkTo}>{title}</Link>
      <small className="caption">Karthik Pichai • 12 June 2019 • 5 Min Read</small>
      <p>{body}</p>
      <Link to={linkTo} className="btn btn-primary-ghost">Read</Link>
    </div>
    <div className={style.articles}>
      <div className={style.article}>
        <img alt="alt text"/>
        <div className={style.articleText}>
          <Link to={linkTo} className="h6">Three Ways Blockchain Positively Influences CSR</Link>
          <small className="caption">Sean Caputo • 17 June 2019 • 4 Min Read</small>
        </div>
      </div>
      <div className={style.article}>
        <img alt="alt text"/>
        <div className={style.articleText}>
          <Link to={linkTo} className="h6">Three Ways Blockchain Positively Influences CSR</Link>
          <small className="caption">Sean Caputo • 17 June 2019 • 4 Min Read</small>
        </div>
      </div>
      <div className={style.article}>
        <img alt="alt text"/>
        <div className={style.articleText}>
          <Link to={linkTo} className="h6">Three Ways Blockchain Positively Influences CSR</Link>
          <small className="caption">Sean Caputo • 17 June 2019 • 4 Min Read</small>
        </div>
      </div>
    </div>
  </div>
)

CardInfo.propTypes = {
  overline: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  linkTo: PropTypes.string
}

CardInfo.defaultProps = {
  overline: `Overline`,
  title: `Three Ways Oncology Will Benefit From Blockchain`,
  body: `That approximately four of five hospitals have a basic electronic health record (EHR) system should be alarming for one reason: the one in five hospitals that don’t use it. That means that 20 percent of healthcare providers still rely on manual filing processes that became outdated the moment Loc…`,
  linkTo: ``,
}

export default CardInfo
