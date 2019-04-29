import React from "react"

/** Component */
const Contact = () => (
  <div>
    <form action="#">
      <input type="text" name="name" placholder="Name" />
      <input type="email" name="email" placeholder="E-Mail" />
      <textarea name="message" placeholder="Ihre Nachricht" />
      <input type="checkbox" name="check_privacy" id="check_privacy" />
      <label htmlFor="check_privacy">
        Ich habe die Datenschutzerklärung gelesen und akzeptiert.
      </label>
      <input type="submit" value="Senden" />
    </form>
    <section>
      <h2>Kontakt</h2>
      <h3>It-Consulting Grossmann</h3>
      <p>
        Stockland 39
        <br />
        66709 Weiskirchen-Konfeld
      </p>

      <p>
        Tel: +49 (0) 6876 791057
        <br />
        Fax: +49(0) 6876 791068
      </p>

      <p>it-consulting-grossmann@t-online.de</p>
    </section>
  </div>
)

export default Contact
