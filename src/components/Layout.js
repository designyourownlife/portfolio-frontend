import React from "react"

import Footer from "./Footer"
import "../assets/css/main.css"
import Mainnav from "./Mainnav"

const Layout = ({ children, extraClass='', isHome=false }) => {
  
  return (
    <React.Fragment>
      <div className={`content-wrapper ${extraClass}`}>
        <Mainnav />
        {!isHome && children}
        <Footer />
      </div>
      {isHome && children}
    </React.Fragment>
  )
}

export default Layout
