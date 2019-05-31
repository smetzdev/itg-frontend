import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <h1>Seite nicht gefunden</h1>
    <p>
      Zurück zur <Link to="/">Startseite</Link>
    </p>
  </Layout>
)

export default NotFoundPage
