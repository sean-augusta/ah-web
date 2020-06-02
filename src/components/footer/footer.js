import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "../../sass/components/footer/footer.module.sass"

const Footer = ({ siteTitle }) => { 
  return (
    <footer className={style.footer} id="footer">
      <div className={style.newsletter}>
        <h3>Stay up to date</h3>
        <p className="body1">Sign up for our newsletter to get updates regarding our products, services, and other news.</p>
        <form>
          <label htmlFor="email">Email</label>
          <input className="subtitle1" type="email" name="email" id="email" placeholder="Enter your email"/>
          <button className="btn">Subscribe</button>
        </form>
      </div>
      <div className={style.locations}>
        <h5>Locations</h5>
        <div className={style.locationsWrapper}>
          <div className={style.location}>
            <small className="overline">Florida, U.S.</small>
            <a className={style.address + " body2"} href="http://maps.google.com/?q=2650%20North%20Military%20Trail%2C%20Suite%20440%20Boca%20Raton%2C%20FL%2033431" target="_blank" rel="noopener noreferrer">2650 North Military Trail, Suite 440 <br/>Boca Raton, FL 33431</a>
          </div>
          <div className={style.location}>
            <small className="overline">Texas, U.S.</small>
            <a className={style.address + " body2"} href="http://maps.google.com/?q=5700%20Granite%20Parkway%2C%20Suite%20940%2C%20Plano%2C%20TX%2075024" target="_blank" rel="noopener noreferrer">5700 Granite Parkway, Suite 940 <br/>Plano, TX 75024</a>
          </div>
          <div className={style.location}>
            <small className="overline">California, U.S.</small>
            <a className={style.address + " body2"} href="http://maps.google.com/?q=830%20Hillview%20Ct%20Suite%20270%20Milpitas%2C%20CA%2095035" target="_blank" rel="noopener noreferrer">830 Hillview Ct, Suite 270 <br/>Milpitas, CA 95035</a>
          </div>
          {/* <div className={style.location}>
            <small className="overline">Coimbatore, India</small>
            <a className={style.address + " body2"} href="http://maps.google.com/?q=830%20Hillview%20Ct%20Suite%20270%20Milpitas%2C%20CA%2095035" target="_blank" rel="noopener noreferrer">830 Hillview Ct, Suite 270 <br/>Milpitas, CA 95035</a>
          </div>
          <div className={style.location}>
            <small className="overline">Hyderabad, India</small>
            <a className={style.address + " body2"} href="http://maps.google.com/?q=830%20Hillview%20Ct%20Suite%20270%20Milpitas%2C%20CA%2095035" target="_blank" rel="noopener noreferrer">830 Hillview Ct, Suite 270 <br/>Milpitas, CA 95035</a>
          </div> */}
        </div>
      </div>
      
        
      <StaticQuery
        query={graphql`
        query FooterQuery{
          prismic {
            allFooters {
              edges {
                node {
                  list_one_header
                  list_one {
                    list_link
                    list_name
                  }
                  list_two_header
                  list_two {
                    list_link
                    list_name
                  }
                  list_three_header
                  list_three {
                    list_link
                    list_name
                  }
                  list_four_header
                  list_four {
                    list_link
                    list_name
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className={style.footerLinks}>
          <ul>
            <li><h6>{data.prismic.allFooters.edges.slice(0,1).pop().node.list_one_header}</h6></li>
            {data.prismic.allFooters.edges.slice(0,1).pop().node.list_one.map(function (item, index) {
              return (
                <li key={index}><Link to={item.list_link}>{item.list_name}</Link></li>
              )
            })}
          </ul>
          <ul>
            <li><h6>{data.prismic.allFooters.edges.slice(0,1).pop().node.list_two_header}</h6></li>
            {data.prismic.allFooters.edges.slice(0,1).pop().node.list_two.map(function (item, index) {
              return (
                <li key={index}><Link to={item.list_link}>{item.list_name}</Link></li>
              )
            })}
          </ul>
          <ul>
            <li><h6>{data.prismic.allFooters.edges.slice(0,1).pop().node.list_three_header}</h6></li>
            {data.prismic.allFooters.edges.slice(0,1).pop().node.list_three.map(function (item, index) {
              return (
                <li key={index}><Link to={item.list_link}>{item.list_name}</Link></li>
              )
            })}
          </ul>
          <ul>
            <li><h6>{data.prismic.allFooters.edges.slice(0,1).pop().node.list_four_header}</h6></li>
            {data.prismic.allFooters.edges.slice(0,1).pop().node.list_four.map(function (item, index) {
              return (
                <li key={index}><Link to={item.list_link}>{item.list_name}</Link></li>
              )
            })}
          </ul>
          <ul>
            <li><h6>Social</h6></li>
            <li><a href="https://www.linkedin.com/company/augusta-hitech-soft-solutions/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/augustahitech.us/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/Augusta_Hitech" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.youtube.com/channel/UCswMEZnS9ia3-AJfx2_yOTg" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="https://medium.com/@Augusta_Hitech" target="_blank" rel="noopener noreferrer">Medium</a></li>
          </ul>
        </div>
      )}
      />
      
      <div className={style.copyright}>
        <p>&copy; 2020 Augusta HiTech | by Augusta Design</p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
