import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "../elements"
import { Helmet } from "react-helmet"
import Favicon from "../images/favicon.ico"

/** Component */
const Layout = ({ children, hasContact }) => (
  <>
    <Helmet>
      <title>IT Consulting Frank Großmann</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="description"
        content="Software, Sicherheit, Administration - von Ihrem IT-Profi"
      />
      <link rel="shortcut icon" href={Favicon} />
    </Helmet>
    <GlobalStyle />
    <Header hasContact={hasContact} />
    {children}
    <Footer />
  </>
)

/** PropTypes + defaultProps */
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasContact: PropTypes.bool,
}

Layout.defaultProps = {
  hasContact: false,
}

export default Layout
