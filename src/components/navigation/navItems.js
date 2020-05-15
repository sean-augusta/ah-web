import { Link } from "gatsby"
import React from "react"
import style from "../../sass/navigation.module.sass"


const NavItems = () => (
  <>
    <li><Link to="/innovation" className="btn" activeClassName={style.activeNav}>Innovation</Link></li>
    <li><Link to="/products" className="btn" activeClassName={style.activeNav}>Products</Link></li>
    <li><Link to="/services" className="btn" activeClassName={style.activeNav}>Services</Link></li>
    <li><Link to="/industries" className="btn" activeClassName={style.activeNav}>Industries</Link></li>
    <li><Link to="/more" className="btn" activeClassName={style.activeNav}>More...</Link></li>
    {/* <li><Link to="/" className="btn btn-primary">Contact Us</Link></li> */}
  </>
)

export default NavItems