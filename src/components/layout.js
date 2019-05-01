import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "../elements"

/** Component */
const Layout = ({ children, hasContact }) => (
  <>
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
