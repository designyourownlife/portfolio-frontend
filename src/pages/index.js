import React from "react"
// import HeroImage from "../components/HeroImage"
// import TextContent from "../components/TextContent"
import Layout from "../components/Layout"
import Seo from "../components/seo"

export default function Home(props) {
  return (
    <Layout extraClass="homepage" isHome={true}>
      <Seo
        title="Freelance Webdesigner &amp; Frontend Developer"
        pathname={props.location.pathname}
      />
      <section className="home">
        <div className="video-container">
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            poster="berlin-tempelhof-airport.jpg"
          >
            <source src="berlin-tempelhof-airport.webm" type="video/webm" />
            <source src="berlin-tempelhof-airport.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="home-hero">
          <h1>Matthias Schreiber</h1>
          <h3>Webdesigner &amp; Frontend Developer</h3>
          <a href="/about" className="btn">
            About me
          </a>
        </div>
      </section>
    </Layout>
  )
}
