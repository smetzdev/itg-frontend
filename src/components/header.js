import React from "react"
import Logo from "../images/logomitschrift.png"

/** Component */
const Header = () => (
  <header>
    <img src={Logo} alt="It-Consulting Grossmann" />
    <a href="#kontakt">Kontakt</a>
  </header>
)

export default Header
