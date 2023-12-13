import React from "react"
import { graphql } from "gatsby"

import HeroImage from "../components/HeroImage"
import TextContent from "../components/TextContent"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const Imprint = props => {
  const {
    data: {
      imprint: { nodes },
    },
  } = props
  const { body, hero_image, bgCol, twitter } = nodes[0]
  const { lang, description, card_image } = twitter

  return (
    <Layout extraClass="imprint">
      <Seo
        title="Impressum &amp; Disclaimer"
        image={card_image}
        description={description}
        lang={lang}
        pathname={props.location.pathname}
      />
      <HeroImage image={hero_image} bgCol={bgCol} />
      <main className="imprint-page">
        <TextContent content={body.data.body} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    imprint: allStrapiImprint {
      nodes {
        id
        title
        bgCol
        body {
          data {
            body
          }
        }
        twitter {
          lang
          description
          card_image {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
                gatsbyImageData(
                  placeholder: NONE
                  layout: FULL_WIDTH
                  formats: NO_CHANGE
                )
              }
            }
            width
            height
          }
        }
        hero_image {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                transformOptions: {
                  duotone: {
                    highlight: "#bfe5bf"
                    shadow: "#3cb03c"
                    opacity: 66
                  }
                }
              )
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`

export default Imprint
