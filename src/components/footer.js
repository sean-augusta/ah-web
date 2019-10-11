import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "../sass/footer.module.sass"

const Footer = ({ siteTitle }) => (
  <footer className={style.footer}>
    <div className={style.newsletter}>
      Newsletter
    </div>
    <div className={style.locations}>
      Locations
    </div>
    <div className={style.footerLinks}>
      <ul>
        <h6>Services</h6>
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
        <h6>Products</h6>
        <li><Link to="/">AH Cancer Blockchain</Link></li>
        <li><Link to="/">AI Natural Conversation</Link></li>
        <li><Link to="/">ADA Solution</Link></li>
        <li><Link to="/">Blue Care</Link></li>
        <li><Link to="/">AH Certified</Link></li>
        <li><Link to="/">AH Supply Chain</Link></li>
        <li><Link to="/">AH Blockchain Framework</Link></li>
      </ul>
      <ul>
        <h6>Company</h6>
        <li><Link to="/">Newsroom</Link></li>
        <li><Link to="/">Leadership</Link></li>
        <li><Link to="/">Careers</Link></li>
        <li><Link to="/">Company</Link></li>
        <li><Link to="/">Events</Link></li>
      </ul>
      <ul>
        <h6>Resources</h6>
        <li><Link to="/">Privacy Policy</Link></li>
        <li><Link to="/">Sitemap</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li><Link to="/">Case Studies</Link></li>
        <li><Link to="/">AH Labs</Link></li>
        <li><Link to="/">AH Startups</Link></li>
        <li><Link to="/">Partner Program</Link></li>
      </ul>
      <ul>
        <h6>Social</h6>
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
