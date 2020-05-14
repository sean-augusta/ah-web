import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "../sass/footer.module.sass"

const Footer = ({ siteTitle }) => (
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
        <div className={style.location}>
          <small className="overline">Coimbatore, India</small>
          <a className={style.address + " body2"} href="http://maps.google.com/?q=830%20Hillview%20Ct%20Suite%20270%20Milpitas%2C%20CA%2095035" target="_blank" rel="noopener noreferrer">830 Hillview Ct, Suite 270 <br/>Milpitas, CA 95035</a>
        </div>
        <div className={style.location}>
          <small className="overline">Hyderabad, India</small>
          <a className={style.address + " body2"} href="http://maps.google.com/?q=830%20Hillview%20Ct%20Suite%20270%20Milpitas%2C%20CA%2095035" target="_blank" rel="noopener noreferrer">830 Hillview Ct, Suite 270 <br/>Milpitas, CA 95035</a>
        </div>
      </div>
    </div>
    <div className={style.footerLinks}>
      <ul>
        <li><h6>Services</h6></li>
        <li><Link to="/">Innovation as a Service</Link></li>
        <li><Link to="/">Blockchain Engineering</Link></li>
        <li><Link to="/">Blockchain Testing</Link></li>
        <li><Link to="/">Machine Learning</Link></li>
        <li><Link to="/">Robotic Process Automation</Link></li>
        <li><Link to="/">Cloud &amp; Infrastructure Services</Link></li>
        <li><Link to="/">Product Development</Link></li>
        <li><Link to="/">Internet of Things</Link></li>
        <li><Link to="/">Data &amp; Analytics</Link></li>
        <li><Link to="/">DevOps</Link></li>
      </ul>
      <ul>
        <li><h6>Products</h6></li>
        <li><Link to="/">AH Cancer Blockchain</Link></li>
        <li><Link to="/">AI Natural Conversation</Link></li>
        <li><Link to="/">ADA Solution</Link></li>
        <li><Link to="/">Blue Care</Link></li>
        <li><Link to="/">AH Certified</Link></li>
        <li><Link to="/">AH Supply Chain</Link></li>
        <li><Link to="/">AH Blockchain Framework</Link></li>
      </ul>
      <ul>
        <li><h6>Company</h6></li>
        <li><Link to="/">Newsroom</Link></li>
        <li><Link to="/">Leadership</Link></li>
        <li><Link to="/">Careers</Link></li>
        <li><Link to="/">Company</Link></li>
        <li><Link to="/">Events</Link></li>
      </ul>
      <ul>
        <li><h6>Resources</h6></li>
        <li><Link to="/">Privacy Policy</Link></li>
        <li><Link to="/">Sitemap</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li><Link to="/">Case Studies</Link></li>
        <li><Link to="/">AH Labs</Link></li>
        <li><Link to="/">AH Startups</Link></li>
        <li><Link to="/">Partner Program</Link></li>
      </ul>
      <ul>
        <li><h6>Social</h6></li>
        <li><a href="https://www.linkedin.com/company/augusta-hitech-soft-solutions/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://www.facebook.com/augustahitech.us/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://twitter.com/Augusta_Hitech" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.youtube.com/channel/UCswMEZnS9ia3-AJfx2_yOTg" target="_blank" rel="noopener noreferrer">YouTube</a></li>
        <li><a href="https://www.linkedin.com/company/augusta-hitech-soft-solutions/" target="_blank" rel="noopener noreferrer">Medium</a></li>
      </ul>
    </div>
    <div className={style.copyright}>
      <p>&copy; 2019 Augusta HiTech | by Augusta Design</p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
