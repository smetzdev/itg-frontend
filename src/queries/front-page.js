import { useStaticQuery, graphql } from "gatsby"

export const heroData = useStaticQuery(
  graphql`
    query Hero {
      wordpressPage {
        acf {
          uberschrift_hero
          hintergrundbild
          portrait
        }
      }
    }
  `
)
