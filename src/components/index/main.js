import React from "react"
import styled from "styled-components"
import { Container } from "../../elements"
import { spacing, colors, typo } from "../../utilities"
import CircuitBG from "../../images/circuit-board.svg"

/** Component */
const Main = () => (
  <StyledMain>
    <Container>
      <h2>Herzlich Willkommen</h2>
      <article>
        <p>
          Wir unterstützen Sie bei Projekten sowie Migrationen, erarbeiten
          ganzheitlich Betriebskonzepte und stellen Ihnen zertifizierte Partner
          zur Verfügung. Selbstverständlich kümmern wir uns auch um die
          Absicherung der installierten Systeme.
        </p>
        <p>
          Gemeinsam mit Ihnen ermitteln wir Ihre Sicherheitsanforderungen und
          setzen diese um. Dabei achten wir immer auf den
          Kosten–Nutzen–Usability-Faktor zwischen Sicherheit und produktivem
          Arbeiten sowie der Wirtschaftlichkeit von IT-Sicherheit.
        </p>
        <p>
          Für Ihre Mitarbeiter stellen wir bei Bedarf Lösungen für den
          Fernzugriff auf Ihre Daten, E-Mails und Anwendungen zur Verfügung. Wir
          entwickeln gemäß Ihren Vorgaben individuelle Softwareanwendungen, die
          von einer Standard-Software nicht abgedeckt werden.
        </p>
        <p>
          Unser Ziel ist es, die Geschäfts- Prozesse und deren Abläufe unserer
          Kunden durch moderne, bedarfsgerechte IT-Lösungen und ein
          umfangreiches Service-Angebot zu unterstützen und für unseren Kunden
          gewinnbringend zu optimieren.
        </p>
      </article>
    </Container>
  </StyledMain>
)

/** Styling */
const StyledMain = styled.main`
  padding: ${spacing.half}px 0;
  background-image: url(${CircuitBG});
  article {
    column-count: 2;
    p {
      margin-top: 0;
      hyphens: auto;
      &:nth-of-type(even) {
        margin-bottom: 0;
      }
    }
  }
  h2 {
    color: ${colors.grey.darker};
    font-size: ${typo.headlines.medium.size}px;
    margin-top: 0;
    margin-bottom: 10px;
  }
`

export default Main
