import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/index/hero"
import { TextPage } from "../elements"

const Impressum = () => (
  <Layout>
    <SEO
      title="IT-Consulting Grossmann Impressum"
      keywords={[`It-Consulting`, `Grossmann`, `Frank Grossmann`, `Impressum`]}
    />
    <Hero />
    <TextPage>
      <h2>IT-Consulting Grossmann</h2>
      <p>
        Frank Großmann
        <br /> Stockland 39
        <br /> 66709 Weiskirchen-Konfeld
      </p>
      <br />
      <p>
        Fon: +49 (0) 6876 791057
        <br /> Fax: +49 (0) 6876 791068
        <br /> Mail: it-consulting-grossmann@t-online.de
        <br /> Web: www.it-consulting-grossmann.de
      </p>
      <br />
      <p>USt-Id: DE296546512</p>
      <br />
      <h2>Haftungsausschluss</h2>
      <h3>Inhalt:</h3>
      <p>
        Diese Webseite wurde mit dem größtmöglichen Maß an Sorgfalt
        zusammengestellt. Ich übernehme dennoch keinerlei Gewähr für die
        Aktualität, Korrektheit, Vollständigkeit oder Qualität der hier
        bereitgestellten Informationen oder den jederzeitigen störungsfreien
        Zugang. Haftungsansprüche, welche sich auf Schäden materieller oder
        ideeller Art beziehen, die durch die Nutzung der dargebotenen
        Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger
        Informationen verursacht wurden, sind grundsätzlich ausgeschlossen. Ich
        behalte mir ausdrücklich vor, Teile der Seiten oder das gesamte Angebot
        ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder
        die Veröffentlichung zeitweise oder endgültig einzustellen.
      </p>
      <h3>Links:</h3>
      <p>
        Wir sind nicht verantwortlich für die Inhalte externer Internetseiten.
        Direkte und indirekte Verweise (Links) liegen außerhalb unseres
        Verantwortungsbereiches und wir erklären hiermit ausdrücklich, dass zum
        Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu
        verlinkenden Seiten erkennbar waren. Wir distanzieren uns ausdrücklich
        von allen Inhalten aller gelinkten und verknüpften Seiten, die nach der
        Linksetzung verändert wurden.
      </p>
      <h3>Urheber- und Kennzeichenrecht:</h3>
      <p>
        Alle innerhalb unserer Seite genannten und ggf. durch Dritte geschützten
        Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen
        des jeweils gültigen Kennzeichenrechts und den Besitzrechten der
        jeweiligen eingetragenen Eigentümer.
      </p>
    </TextPage>
  </Layout>
)

export default Impressum
