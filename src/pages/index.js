import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Main from "../components/main"

const IndexPage = () => (
  <Layout>
    <SEO
      title="IT-Consulting Grossmann"
      keywords={[`It-Consulting`, `Grossmann`, `Frank Grossmann`]}
    />
    <Hero />
    <Main />
  </Layout>
)

export default IndexPage
