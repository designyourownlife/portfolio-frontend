import React from "react"
import { Link } from "gatsby"
import {
  FaLinkedin,
  FaXingSquare,
  FaInstagram,
  FaGithub,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/designyourownlife/",
  },
  {
    id: 2,
    icon: <FaXingSquare className="social-icon"></FaXingSquare>,
    url: "https://www.xing.com/profile/Matthias_Schreiber16/",
  },
  {
    id: 3,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/designyourownlife.de/",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/designyourownlife",
  },
]

const tempLinks = data.map(link => (
  <li key={link.id}>
    <Link to={link.url} key={link.id} className="social-link">
      {link.icon}
    </Link>
  </li>
))

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}

export default SocialLinks
