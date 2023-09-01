import React from "react"
import { Link, graphql } from "gatsby"

import HeroImage from "../components/HeroImage"
import Layout from "../components/Layout"
import TextContent from "../components/TextContent"
import Title from "../components/Title"
import SocialLinks from "../constants/social_links"

export default function ResponseThanks({
  data: {
    default: { nodes },
  },
}) {
  const { bgCol, hero_image } = nodes[0]
  return (
    <Layout>
      <HeroImage image={hero_image} bgCol={bgCol} />
      <main className="thanks-page">
        <Title
          title="Thanks / Dankeschön"
          subtitle="Ihre Anfrage wurde erfolgreich versendet"
        />
        <TextContent content="Ich werde mich in Kürze mit Ihnen in Verbindung setzen." />
        <p>
          <Link to="/" className="btn">
            back to home
          </Link>
        </p>
        <SocialLinks />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    default: allStrapiHero {
      nodes {
        bgCol
        hero_image {
          localFile {
            childImageSharp {
              fluid {
                src
              }
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
          alternativeText
        }
      }
    }
  }
`
