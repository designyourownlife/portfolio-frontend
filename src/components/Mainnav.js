import React from "react"

import PageLinks from "../constants/links"

const Mainnav = () => {
  return (
    <header>
      <h1 className="home-link rotate-vertical">
        <a aria-current="page" href="/">
          designyourownlife.de
        </a>
      </h1>

      <nav aria-label="Primary Navigation" className="primary-nav">
        <PageLinks />
      </nav>
    </header>
  )
}

export default Mainnav
