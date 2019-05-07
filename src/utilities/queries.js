export const frontPageQuery = `
query frontPageQuery {
  wordpressPage {
    acf {
      uberschrift_hero
      hintergrundbild
      portrait
      uberschrift_hauptext
      inhalt_haupttext
      alle_leistungen {
        icon
        uberschrift
        text
      }
    }
  }
}
`
