import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroImage = ({ image, bgCol=`transparent` }) => {
  // const img = getImage(image.localFile.childImageSharp)
  return (
    <React.Fragment>
      <div
        className="image-holder gatsby-image-wrapper"
        style={{ backgroundColor: `${bgCol}` }}
      >
        {!image && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Canoe_Prow_Mask%2C_Papua_New_Guinea%2C_Br%C3%BCcke_Museum_Berlin%2C_65038%2C_view_c.jpg/767px-Canoe_Prow_Mask%2C_Papua_New_Guinea%2C_Br%C3%BCcke_Museum_Berlin%2C_65038%2C_view_c.jpg?uselang=de"
            title="Black and silver vintage camera by Alexander Andrews (via unsplash.com)"
            alt="Black and silver vintage camera by Alexander Andrews (via unsplash.com)"
          />
        )}
        {image && image.url && (
          <img src={image.url} alt={image.alternativeText} />
        )}
        {image && image.localFile.childImageSharp && (
          <GatsbyImage
            image={getImage(image.localFile.childImageSharp)}
            alt={image.alternativeText}
            backgroundColor={bgCol}
          />
        )}
      </div>
    </React.Fragment>
  )
}

export default HeroImage