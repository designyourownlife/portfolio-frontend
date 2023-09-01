import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import HeroImage from "../components/HeroImage"
import Title from "../components/Title"

const Error = ({
  data: {
    default: { nodes },
  },
}) => {
  const { bgCol, hero_image } = nodes[0]
  return (
    <Layout>
      <HeroImage image={hero_image} bgCol={bgCol} />
      <main className="error-page">
        <Title title="404" subtitle="Page not found" />
        <section className="content error-container">
          <Link to="/" className="btn">
            back home
          </Link>
        </section>
      </main>
    </Layout>
  )
}

export default Error;

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