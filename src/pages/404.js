import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation/navigation"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Navigation></Navigation>
    <section>
      <h1 className={`h4`}>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Layout>
)

export default NotFoundPage
