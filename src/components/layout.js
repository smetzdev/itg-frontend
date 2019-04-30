import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "../elements"

/** Component */
const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </>
)

/** PropTypes */
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
