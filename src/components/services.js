import React from "react"

/** Icon Imports */
import Software from "../images/icons/icon-code.svg"
import Security from "../images/icons/icon-security-check.svg"
import Adminstration from "../images/icons/icon-server.svg"

/** Component */
const Services = () => (
  <section>
    <article>
      <Software />
      <h3>Software</h3>
      <p>
        Unsere kundenspezifischen Softwarelösungen werden nach Ihrem
        Leistungsanspruch designt.
      </p>
    </article>
    <article>
      <Security />
      <h3>Sicherheit</h3>
      <p>
        Gemeinsam mit Ihnen ermitteln wir Ihre Sicherheitsanforderungen und
        setzen Diese um.
      </p>
    </article>
    <article>
      <Adminstration />
      <h3>Administration</h3>
      <p>
        Wir bieten Ihnen eine professionelle Adminstration von Servern, Storage
        und Netzen.
      </p>
    </article>
  </section>
)

export default Services
