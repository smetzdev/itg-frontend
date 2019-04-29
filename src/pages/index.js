import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Main from "../components/main"
import Services from "../components/services"

const IndexPage = () => (
  <Layout>
    <SEO
      title="IT-Consulting Grossmann"
      keywords={[`It-Consulting`, `Grossmann`, `Frank Grossmann`]}
    />
    <Hero />
    <Main />
    <Services />
  </Layout>
)

export default IndexPage
