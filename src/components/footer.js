import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <h4>&copy; {currentYear} IT-Consulting Grossmann</h4>
      <ul>
        <li>
          <Link to="/impressum">Impressum</Link>
        </li>
        <li>
          <Link to="/datenschutz">Datenschutz</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
