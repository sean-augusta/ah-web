import { Link } from "gatsby"
import React from "react"
import style from "../sass/navigation.module.sass"


export default NavItems = () => (
  <ul className={style.navItems} id="navItems">
    <button className={style.hamburgerClose} id="hamburgerClose" onClick={mobileNavToggle}>Toggle Navigation Closed
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path className={style.path} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
    </button>
    <li><Link to="/innovation" className="btn" activeClassName={style.activeNav}>Innovation</Link></li>
    <li><Link to="/products" className="btn" activeClassName={style.activeNav}>Products</Link></li>
    <li><Link to="/services" className="btn" activeClassName={style.activeNav}>Services</Link></li>
    <li><Link to="/industries" className="btn" activeClassName={style.activeNav}>Industries</Link></li>
    <li><Link to="/more" className="btn" activeClassName={style.activeNav}>More...</Link></li>
    {/* <li><Link to="/" className="btn btn-primary">Contact Us</Link></li> */}
  </ul>
)