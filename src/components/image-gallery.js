import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

import { mq, gutter, offset, offsetXxl } from "../utils/presets"

const OuterContainer = styled(`div`)`
  background: #fff;

  ${mq.tablet} {
    margin: 0;
    margin-left: calc(-${offset} - ${gutter.tablet});
    padding: 6.25rem;
    padding-right: 0;
    padding-top: 1rem
  }

  ${mq.desktop} {
    margin-left: calc(-${offset} - ${gutter.desktop});
  }

  ${mq.xl} {
    margin-right: -${gutter.desktop};
  }

  ${mq.xxl} {
    margin-left: calc(-${offsetXxl} - ${gutter.desktop});
  }
`

const Grid = styled(`div`)`
  column-count: 1;
  column-gap: ${gutter.default};

  ${mq.mobile} {
    column-count: 1;
  }

  ${mq.tablet} {
    column-count: 2;
  }

  ${mq.xl} {
    column-count: 3;
    column-gap: ${gutter.tablet};
  }
`

const GridItem = styled(`div`)`
  break-inside: avoid;
  position: relative;
  margin-bottom: ${gutter.default};

  ${mq.xl} {
    margin-bottom: ${gutter.tablet};
  }
`

const GridItemImage = styled(GatsbyImage)`
  border-radius: 0.15rem;
  &:hover {
    [data-placeholder-image] {
      opacity: 1 !important;
      transition: none !important;
    }

    [data-main-image] {
      opacity: 0 !important;
      transition: none !important;
    }
  }
`

const Badge = styled(`span`)`
  background: #eaedf3;
  border-radius: 0.15rem;
  margin-top: 2px;
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  line-height: 1.1;
  padding: 0.35rem 0.5rem;
  display: inline-block;
  pointer-events: none;
  width: auto;
  text-align: left;

  ${mq.mobile} {
    position: relative;
    opacity: 1;
  }

`

const ImageGallery =  ({ images }) => {
  return (
  <OuterContainer>
    <Grid>
      {images.map((item, index) => {
        const img = getImage(item.abbildung.localFile)
      
        return (
          <GridItem key={index}>
            <Link to={`https://${item.weblink}`} className={`imgLink`}>
              <GridItemImage
                image={img}
                alt={`${item.abbildung.alternativeText}`}
              />
            <Badge>{item.weblink}</Badge>
            </Link>
          </GridItem>
        )
      })}
    </Grid>
  </OuterContainer>
  )
}

export default ImageGallery
