import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "About",
    url: "/about/",
  },
  {
    id: 2,
    text: "Showcase",
    url: "/showcase/",
  },
  {
    id: 3,
    text: "Story",
    url: "/stories/beauty-of-abstraction",
  },
  {
    id: 4,
    text: "Contact",
    url: "/contact/",
  },
  {
    id: 5,
    text: "Impressum",
    url: "/imprint/",
  },
]

const isActive =
  (className, url) =>
  ({ isCurrent, location }) => {
    const activeClassName = { className: `${className} current` }

    if (
      isCurrent ||
      (location.pathname.startsWith("/stories/") && url.startsWith("/stories/"))
    ) {
      return activeClassName
    }

    return { className }
  }

const tempLinks = data.map(link => (
  <li key={link.id} className={`nav-item`}>
    <Link
      to={link.url}
      className={`nav-link`}
      activeClassName={`current`}
      getProps={isActive(`nav-link`, link.url)}
    >
      {link.text}
    </Link>
  </li>
))

const Links = ({ styleClass }) => {
  return (
    <ul className={`nav-items ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}

export default Links;