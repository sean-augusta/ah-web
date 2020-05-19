import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "../../sass/components/navigation/navigationOnImage.module.sass"
import { useStaticQuery, graphql } from "gatsby"
import NavItems from "./navItems"

// Optimize
if (typeof document !== 'undefined') {
  window.onscroll = function() {updateScroll()};
  function updateScroll() {
    const scrollPosition = window.pageYOffset;
    const nav = document.getElementById('navOnImage');
    const close = document.getElementById('hamburgerClose');
    if (scrollPosition > 50) {
      nav.className = style.navigationOnImage + ' ' + style.scrolled;
      close.className = style.hamburgerClose + ' ' + style.scrolledItem;
    } else {
      nav.className = style.navigationOnImage;
      close.className = style.hamburgerClose;
    }
  }
};

function mobileNavToggle() {
  const navItems = document.getElementById('navItems');
  if (navItems.className === style.navItems) {
    navItems.className = style.navItems + ' ' + style.active;
  } else {
    navItems.className = style.navItems;
  }
}

const Header = () => {
  const data = useStaticQuery(graphql`
    query NavOnImageQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
  <nav className={style.navigationOnImage} id="navOnImage">
    <Link to="/" className={style.logo}>{ data.site.siteMetadata.title }
      <svg xmlns="http://www.w3.org/2000/svg" width="191.719" height="40" viewBox="0 0 191.719 40">
        <g transform="translate(-94 -100)">
          <g transform="translate(94 106.591)">
            <path d="M97.56,1068.894a2.814,2.814,0,0,1-5.013-1.769,2.439,2.439,0,0,1,.59-1.709l14.33-19.285a7.82,7.82,0,0,1,6.192-3.067,7.658,7.658,0,0,1,3.362.767,6.882,6.882,0,0,1,2.595,2.123l14.331,19.167a4.076,4.076,0,0,1,.59.914,2.541,2.541,0,0,1,.236,1.091,2.818,2.818,0,0,1-2.831,2.831,2.638,2.638,0,0,1-2.241-1.12l-13.741-18.342a12.952,12.952,0,0,0-1.032-1.032,1.717,1.717,0,0,0-2.536,0,7.639,7.639,0,0,0-.973,1.032Z" transform="translate(-92.547 -1043.063)" className={style.base} fillRule="evenodd"/>
            <path d="M169.354,1120.933a3.624,3.624,0,1,1,1.062,2.6,3.53,3.53,0,0,1-1.062-2.6" transform="translate(-151.898 -1100.41)" className={style.dot} fillRule="evenodd"/>
          </g>
          <path d="M8.98-44.032l-.882-2.9H3.662l-.882,2.9H0L4.295-56.25H7.449L11.76-44.032Zm-1.5-5.06Q6.259-53.029,6.1-53.545t-.221-.816Q5.61-53.3,4.311-49.092Zm12.031,5.06-.341-1.19h-.133a2.678,2.678,0,0,1-1.157,1,3.95,3.95,0,0,1-1.706.354,3.249,3.249,0,0,1-2.472-.878,3.533,3.533,0,0,1-.832-2.526v-6.067H15.41V-47.9a2.611,2.611,0,0,0,.358,1.511,1.3,1.3,0,0,0,1.14.5,1.714,1.714,0,0,0,1.54-.712,4.413,4.413,0,0,0,.474-2.36v-4.378h2.539v9.305Zm12.539-9.305v1.29l-1.457.375a2.539,2.539,0,0,1,.4,1.4,2.823,2.823,0,0,1-1.045,2.335,4.524,4.524,0,0,1-2.9.836l-.458-.025-.375-.042a.844.844,0,0,0-.391.666q0,.549,1.4.549h1.581a3.607,3.607,0,0,1,2.335.658,2.35,2.35,0,0,1,.8,1.931,2.864,2.864,0,0,1-1.361,2.53,7.087,7.087,0,0,1-3.908.9,5.41,5.41,0,0,1-2.975-.678,2.154,2.154,0,0,1-1.028-1.9,1.991,1.991,0,0,1,.524-1.407,2.977,2.977,0,0,1,1.54-.807,1.7,1.7,0,0,1-.682-.545,1.3,1.3,0,0,1-.291-.8,1.3,1.3,0,0,1,.308-.886,3.56,3.56,0,0,1,.891-.695A2.5,2.5,0,0,1,23.8-48.676a3.09,3.09,0,0,1-.429-1.648,2.906,2.906,0,0,1,.99-2.355,4.283,4.283,0,0,1,2.83-.832,7.242,7.242,0,0,1,.928.071q.537.071.687.1Zm-7.183,10.62a.92.92,0,0,0,.5.824,2.771,2.771,0,0,0,1.411.3,5,5,0,0,0,2.139-.375,1.141,1.141,0,0,0,.774-1.024.725.725,0,0,0-.458-.724,3.749,3.749,0,0,0-1.415-.2H26.509a1.991,1.991,0,0,0-1.169.329A1.014,1.014,0,0,0,24.869-42.717Zm.924-7.574a1.9,1.9,0,0,0,.345,1.2,1.255,1.255,0,0,0,1.053.441,1.229,1.229,0,0,0,1.049-.441,1.945,1.945,0,0,0,.333-1.2q0-1.681-1.382-1.681Q25.793-51.972,25.793-50.291ZM40-44.032l-.341-1.19H39.53a2.678,2.678,0,0,1-1.157,1,3.95,3.95,0,0,1-1.706.354,3.249,3.249,0,0,1-2.472-.878,3.533,3.533,0,0,1-.832-2.526v-6.067H35.9V-47.9a2.61,2.61,0,0,0,.358,1.511,1.3,1.3,0,0,0,1.14.5,1.714,1.714,0,0,0,1.54-.712,4.413,4.413,0,0,0,.474-2.36v-4.378h2.539v9.305ZM50.937-46.8a2.562,2.562,0,0,1-.995,2.181,4.914,4.914,0,0,1-2.975.749A9.345,9.345,0,0,1,45.236-44a6.548,6.548,0,0,1-1.34-.4v-2.1a8.85,8.85,0,0,0,1.594.558,6.454,6.454,0,0,0,1.561.225q1.382,0,1.382-.8a.667.667,0,0,0-.183-.487,2.655,2.655,0,0,0-.633-.424q-.449-.237-1.2-.553a7.529,7.529,0,0,1-1.577-.832,2.343,2.343,0,0,1-.732-.878,2.9,2.9,0,0,1-.229-1.219,2.21,2.21,0,0,1,.961-1.918,4.683,4.683,0,0,1,2.726-.678,7.737,7.737,0,0,1,3.271.732l-.766,1.831q-.7-.3-1.307-.491a4.1,4.1,0,0,0-1.24-.191q-1.124,0-1.124.608a.714.714,0,0,0,.362.591,9.846,9.846,0,0,0,1.586.741,7.366,7.366,0,0,1,1.6.824,2.437,2.437,0,0,1,.749.882A2.711,2.711,0,0,1,50.937-46.8Zm5.731.907a5.5,5.5,0,0,0,1.6-.291v1.889a5.7,5.7,0,0,1-2.33.424,2.852,2.852,0,0,1-2.218-.77,3.351,3.351,0,0,1-.695-2.31v-4.486H51.807V-52.5l1.4-.849.732-1.964h1.623v1.981h2.605v1.906H55.561v4.486a.991.991,0,0,0,.3.8A1.2,1.2,0,0,0,56.668-45.888Zm9.218,1.856L65.395-45.3h-.067a3.749,3.749,0,0,1-1.319,1.119,4.263,4.263,0,0,1-1.769.312,2.86,2.86,0,0,1-2.11-.766,2.941,2.941,0,0,1-.77-2.181A2.455,2.455,0,0,1,60.4-49a6,6,0,0,1,3.125-.778l1.615-.05v-.408a1.266,1.266,0,0,0-1.448-1.415,6.6,6.6,0,0,0-2.622.674l-.841-1.715a7.565,7.565,0,0,1,3.562-.841,4.437,4.437,0,0,1,2.871.816,3.014,3.014,0,0,1,1,2.48v6.2Zm-.749-4.311-.982.033a3.145,3.145,0,0,0-1.648.4,1.255,1.255,0,0,0-.541,1.115q0,1.074,1.232,1.074a1.951,1.951,0,0,0,1.411-.508,1.783,1.783,0,0,0,.529-1.348Zm19.393,4.311H81.958v-5.252H77.139v5.252h-2.58V-56.2h2.58v4.769h4.819V-56.2h2.572Zm2.593-11.71q0-1.24,1.382-1.24t1.382,1.24a1.209,1.209,0,0,1-.345.92,1.452,1.452,0,0,1-1.036.329Q87.122-54.494,87.122-55.742Zm2.647,11.71H87.23v-9.305h2.539Zm7.387,0h-2.58V-54.053h-3.3V-56.2h9.189v2.147h-3.3Zm7.47-7.674a1.61,1.61,0,0,0-1.265.512,2.369,2.369,0,0,0-.524,1.452H106.4a2.116,2.116,0,0,0-.491-1.452A1.663,1.663,0,0,0,104.626-51.706Zm.358,7.84a4.8,4.8,0,0,1-3.512-1.24,4.7,4.7,0,0,1-1.265-3.512,5.164,5.164,0,0,1,1.169-3.616,4.164,4.164,0,0,1,3.233-1.278,4.1,4.1,0,0,1,3.071,1.124,4.251,4.251,0,0,1,1.1,3.1v1.232h-6a2.443,2.443,0,0,0,.641,1.69,2.255,2.255,0,0,0,1.681.608,6.979,6.979,0,0,0,1.59-.175,7.955,7.955,0,0,0,1.565-.558v1.964a5.961,5.961,0,0,1-1.423.5A8.973,8.973,0,0,1,104.984-43.865Zm9.468,0q-4.345,0-4.345-4.769a5.087,5.087,0,0,1,1.182-3.625,4.434,4.434,0,0,1,3.387-1.253,6.458,6.458,0,0,1,2.9.633l-.749,1.964q-.6-.241-1.115-.4a3.593,3.593,0,0,0-1.032-.154q-1.981,0-1.981,2.813,0,2.73,1.981,2.73a4.516,4.516,0,0,0,1.357-.2,4.9,4.9,0,0,0,1.248-.612v2.172a4.092,4.092,0,0,1-1.244.541A7,7,0,0,1,114.451-43.865Zm13.4-.166h-2.538v-5.435q0-2.014-1.5-2.014a1.7,1.7,0,0,0-1.54.724,4.422,4.422,0,0,0-.474,2.347v4.378h-2.539V-56.982H121.8v2.638q0,.308-.058,1.448l-.058.749h.133a2.941,2.941,0,0,1,2.7-1.365,3.3,3.3,0,0,1,2.489.882,3.5,3.5,0,0,1,.849,2.53Z" transform="translate(157.864 170.623)" className={style.base}/>
          <rect width="0.909" height="40" transform="translate(146.727 100)" className={style.base}/>
        </g>
      </svg>
    </Link>
    <button className={style.hamburgerOpen} onClick={mobileNavToggle}>Toggle Navigation Open
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
        <g transform="translate(-431 -50)">
          <g transform="translate(439 58)">
            <path d="M0,0H24V24H0Z" fill="none"/>
            <path className={style.path} d="M3,18H21V16H3Zm0-5H21V11H3ZM3,6V8H21V6Z" fill="#1f2127"/>
          </g>
        </g>
      </svg>
    </button>
    <ul className={style.navItems} id="navItems">
      <button className={style.hamburgerClose} id="hamburgerClose" onClick={mobileNavToggle}>Toggle Navigation Closed
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path className={style.path} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
      </button>
      <NavItems />
    </ul>
  </nav>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

