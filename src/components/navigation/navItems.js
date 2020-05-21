import { Link } from "gatsby"
import React from "react"
import style from "../../sass/components/navigation/navigation.module.sass"
import moreNavItemsStyle from "../../sass/components/navigation/navItems.module.sass"


function mobileNavToggleMore(event) {
  // event.preventDefault();
  const navItems = document.getElementById('moreNavItems');
  const navToggle = document.getElementById('mobileNavToggleMoreToggle');
  if (navItems.className === moreNavItemsStyle.moreNavItems) {
    navItems.className = `${moreNavItemsStyle.moreNavItems} ${moreNavItemsStyle.active}`;
  } else {
    navItems.className = moreNavItemsStyle.moreNavItems;
  }
  if (navToggle.className === `${moreNavItemsStyle.toggle}`) {
    navToggle.className = `${moreNavItemsStyle.toggle}  ${moreNavItemsStyle.active}`;
    navToggle.innerText = "Close";
  } else {
    navToggle.className = `${moreNavItemsStyle.toggle}`;
    navToggle.innerText = "More...";
  }
}

const NavItems = () => (
  <>
    <li><Link to="/innovation" className="btn" activeClassName={style.activeNav}>Innovation</Link></li>
    <li><Link to="/products" className="btn" activeClassName={style.activeNav}>Products</Link></li>
    <li><Link to="/services" className="btn" activeClassName={style.activeNav}>Services</Link></li>
    <li><Link to="/industries" className="btn" activeClassName={style.activeNav}>Industries</Link></li>
    <li>
      <button className={`${moreNavItemsStyle.toggle}`} onClick={mobileNavToggleMore} id="mobileNavToggleMoreToggle">
        More...
      </button>
      <ul className={moreNavItemsStyle.moreNavItems} id="moreNavItems">
        <li className={moreNavItemsStyle.navItem}><Link to="/company" className={'btn'} activeClassName={style.activeNav}>Company</Link></li>
        <li className={moreNavItemsStyle.navItem}><Link to="/newsroom" className={'btn'} activeClassName={style.activeNav}>Newsroom</Link></li>
        <li className={moreNavItemsStyle.navItem}><Link to="/careers" className={'btn'} activeClassName={style.activeNav}>Careers</Link></li>
      </ul>
    </li>
    {/* <li><Link to="/" className="btn btn-primary">Contact Us</Link></li> */}
  </>
)

export default NavItems