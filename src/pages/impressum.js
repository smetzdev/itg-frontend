import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/index/hero"
import { TextPage } from "../elements"

const Impressum = () => {
  const {
    wordpressPage: { content },
  } = useStaticQuery(
    graphql`
      query Imprint {
        wordpressPage(wordpress_id: { eq: 8 }) {
          content
        }
      }
    `
  )
  return (
    <Layout>
      <Hero />
      <TextPage children={content} />
    </Layout>
  )
}

export default Impressum
