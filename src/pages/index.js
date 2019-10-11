import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../sass/index.module.sass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={style.logoAnimation}>
      <svg height="1060.972" viewBox="0 0 1665.348 1060.972" width="1665.348" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" opacity=".25" stroke="#1f2127" strokeWidth="1" transform="translate(.5 .5)">
          <path d="m290.129 2061.2q-34.868 41.892-86.007 41.836-46.519 0-79.03-32.534-32.585-32.524-32.544-79.036 0-41.845 23.246-67.37l564.852-760.162q39.505-53.435 104.605-87.167 65.05-33.675 139.471-33.7a301.845 301.845 0 0 1 132.5 30.221q62.767 30.216 102.276 83.664l564.86 755.477a160.634 160.634 0 0 1 23.247 36.037 100.162 100.162 0 0 1 9.291 43q0 46.573-32.538 79.036-32.585 32.572-79.038 32.534-55.778 0-88.326-44.127l-541.615-722.972a510.2 510.2 0 0 0 -40.679-40.665q-24.4-22.067-49.978-22.053-25.6 0-49.978 22.053-24.4 22.118-38.35 40.665z" transform="translate(-92.547 -1043.063)"/>
          <path d="m169.354 1261.393q0-60.419 41.843-102.276t102.275-41.84q60.415 0 102.278 41.84 41.841 41.85 41.843 102.276 0 60.48-41.843 102.289-41.85 41.844-102.277 41.818-60.482 0-102.275-41.821-41.842-41.849-41.843-102.289" transform="translate(518.7 -452.462)"/>
        </g>
      </svg>
    </div>
    <div className={style.animationMaskAway}></div>
    <section className={style.header}>
      <h1 className="h2">A Science and Technology company powered by Innovation.</h1>
      <div className={style.card}>
        This will be a big card.
      </div>
    </section>
  </Layout>
)

export default IndexPage
