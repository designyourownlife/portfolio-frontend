import React from "react"
import { Link } from "gatsby"

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const StoryPageNav = ({ previous, next }) => {
  let prevStory, nextStory
  if (previous) {
    prevStory = (
      <Link to={`/stories/${previous}`} className="pagenav-link prev">
        <FaChevronLeft className="nav-icon enabled" />
      </Link>
    )
  } else {
    prevStory = (
      <span className="link-placeholder prev">
        <FaChevronLeft className="nav-icon disabled" />
      </span>
    )
  }
  if (next) {
    nextStory = (
      <Link to={`/stories/${next}`} className="pagenav-link next">
        <FaChevronRight className="nav-icon enabled" />
      </Link>
    )
  } else {
    nextStory = (
      <span className="link-placeholder next">
        <FaChevronRight className="nav-icon disabled" />
      </span>
    )
  }
  return (
    <React.Fragment>
      <nav className="pagenav">
        <div className="prev">{prevStory}</div>
        <div className="next">{nextStory}</div>
      </nav>
    </React.Fragment>
  )
}

export default StoryPageNav
