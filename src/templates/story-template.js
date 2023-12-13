import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import HeroImage from "../components/HeroImage"
import TextContent from "../components/TextContent"
import StoryPageNav from "../components/StoryPageNav"
import Title from "../components/Title"
import Seo from "../components/seo"

const StoryTemplate = props => {
  const {
    data: { currStory },
    pageContext,
    data: { twitterCard },
  } = props
  const { bgCol, slug, title, body, excerpt, hero_image } = currStory
  const { prevSlug, nextSlug } = pageContext
  const { card_image } = twitterCard

  return (
    <Layout extraClass={`story ${slug}`}>
      <Seo
        title={title}
        description={excerpt}
        image={card_image}
        lang="de"
        pathname={props.location.pathname}
      />
      <HeroImage image={hero_image} bgCol={bgCol} />
      <StoryPageNav previous={prevSlug} next={nextSlug} />
      <main className="story-page">
        <Title title={title} />
        <TextContent content={body.data.body} />
      </main>
    </Layout>
  )
}

export default StoryTemplate

export const query = graphql`
  query GetSingleStory($slug: String = "") {
    currStory: strapiStory(slug: { eq: $slug }) {
      id
      slug
      bgCol
      title
      excerpt
      body {
        data {
          body
        }
      }
      hero_image {
        alternativeText
        localFile {
          childImageSharp {
            fluid {
              src
            }
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
    twitterCard: strapiHero {
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
`
