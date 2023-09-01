import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import HeroImage from "../components/HeroImage"
import ContactForm from "../components/ContactFom"
import Title from "../components/Title"
import Seo from "../components/seo"

const Contact = props => {
  const {
    data: { staticSettings } } = props;
  const { bgCol, hero_image, card_image } = staticSettings
  return (
    <Layout>
      <Seo
        title="Contact"
        image={card_image}
        description="Kontakt — Get in touch with Matthias Schreiber | m/s Web Development from Soest (Germany)"
        lang="de"
        pathname={props.location.pathname}
      />
      <HeroImage image={hero_image} bgCol={bgCol} />
      <main className="contact-page">
        <Title title="Fragen?" subtitle="Senden Sie mir eine Nachricht" />
        <section className="content contact-container">
          <ContactForm />
        </section>
      </main>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  {
    staticSettings: strapiHero {
      card_image {
        src: url
        width
        height
      }
      bgCol
      hero_image {
        alternativeText
        localFile {
          childImageSharp {
            fluid {
              src
            }
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
