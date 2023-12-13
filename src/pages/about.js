import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import HeroImage from "../components/HeroImage"
import TextContent from "../components/TextContent"
import SocialLinks from "../constants/social_links"
import Seo from "../components/seo"

const About = props => {
  const {
    data: {
      about: { nodes },
    },
  } = props
  const { title, body, hero_image, stack, bgCol, twitter } = nodes[0]
  const { lang, description, card_image } = twitter

  return (
    <Layout extraClass="about">
      <Seo
        title={title}
        image={card_image}
        description={description}
        lang={lang}
        pathname={props.location.pathname}
      />
      <HeroImage image={hero_image} bgCol={bgCol} />
      <main className="about-page">
        <TextContent content={body.data.body} />
        <div className="tech-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.name}</span>
          })}
        </div>
        <SocialLinks />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        id
        hero_image {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                transformOptions: {
                  duotone: {
                    highlight: "#e66b6b"
                    shadow: "#192550"
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
        title
        body {
          data {
            body
          }
        }
        stack {
          name
          id
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
      }
    }
  }
`

export default About
