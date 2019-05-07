import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/index/hero"
import { TextPage } from "../elements"

const Datenschutz = () => {
  const {
    wordpressPage: { content },
  } = useStaticQuery(
    graphql`
      query PrivacyPage {
        wordpressPage(wordpress_id: { eq: 10 }) {
          content
        }
      }
    `
  )
  return (
    <Layout>
      <SEO
        title="IT-Consulting Grossmann Impressum"
        keywords={[
          `It-Consulting`,
          `Grossmann`,
          `Frank Grossmann`,
          `Impressum`,
        ]}
      />
      <Hero />
      <TextPage children={content} />
    </Layout>
  )
}

export default Datenschutz
