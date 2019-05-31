import React from "react"
import Layout from "../components/layout"
import Hero from "../components/index/hero"
import Main from "../components/index/main"
import Services from "../components/index/services"
import Contact from "../components/index/contact"

const IndexPage = () => (
  <Layout hasContact>
    <Hero />
    <Main />
    <Services />
    <Contact />
  </Layout>
)

export default IndexPage
