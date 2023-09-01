import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import HeroImage from "../components/HeroImage"
import TextContent from "../components/TextContent"
import ImageGallery from "../components/image-gallery"
import Seo from "../components/seo"

const Showcase = props => {
  const { data: { showcase: { nodes } } } = props
  const { title, body, hero_image, portfolio, bgCol, twitter } = nodes[0]
  const { lang, description, card_image } = twitter

  return (
    <Layout extraClass="showcase">
      <Seo
        title={title}
        image={card_image}
        description={description}
        lang={lang}
        pathname={props.location.pathname}
      />
      <HeroImage image={hero_image} bgCol={bgCol} />
      <main className="showcase-page">
        <TextContent content={body.data.body} />
        <ImageGallery images={portfolio} />
      </main>
    </Layout>
  )
}

export default Showcase

export const query = graphql`
  {
    showcase: allStrapiShowcase {
      nodes {
        id
        title
        body {
          data {
            body
          }
        }
        twitter {
          lang
          description
          card_image {
            src: url
            width
            height
          }
        }
        portfolio {
          id
          title
          weblink
          description {
            data {
              description
            }
          }
          abbildung {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                fluid {
                  src
                }
              }
            }
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
                    highlight: "#52d1da"
                    shadow: "#192550"
                    opacity: 50
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
