import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

function SEO({ description, lang, meta, image: metaImage, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const image =
    metaImage && metaImage.localFile
      ? `${site.siteMetadata.siteUrl}${getSrc(metaImage.localFile)}`
      : null
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.siteTitle}`}
        link={
          canonical
            ? [
                {
                  rel: "canonical",
                  href: canonical,
                },
              ]
            : []
        }
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            name: "keywords",
            content: site.siteMetadata.keywords.join(","),
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `twitter:domain`,
            content: site.siteMetadata.siteUrl,
          },
          {
            property: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            property: `twitter:title`,
            content: title,
          },
          {
            property: `twitter:description`,
            content: metaDescription,
          },
          {
            property: `twitter:url`,
            content: canonical,
          },
        ]
          .concat(
            metaImage
              ? [
                  {
                    property: "og:image",
                    content: image,
                  },
                  {
                    property: "og:image:width",
                    content: metaImage.width,
                  },
                  {
                    property: "og:image:height",
                    content: metaImage.height,
                  },
                  {
                    property: "twitter:card",
                    content: "summary_large_image",
                  },
                  {
                    property: "twitter:image:src",
                    content: image,
                  },
                ]
              : [
                  {
                    property: "twitter:card",
                    content: "summary",
                  },
                ]
          )
          .concat(meta)}
      />
      <Helmet>
        <meta
          name="google-site-verification"
          content="dVMqih4dY1ILDfwCqBC6VFsT-iifsFDZJmsPX6Eeb_c"
        />
        <link rel="icon" href="/favicon.ico" sizes="any"></link>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <link rel="manifest" href="/manifest.json"></link>

        <script type="application/ld+json">
          {`
          {
          "@context": "https://schema.org",
          "@type": "Person",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Soest",
            "postalCode": "59494",
            "addressCountry": "Germany"
          },
          "email": "mailto:info@designyourownlife.de",
          "image" : "/designyourownlife_logo_ms_2_768309862d.png",
          "jobTitle": "Frontend Web Developer",
          "name": "Matthias Schreiber",
          "url" : "https://www.designyourownlife.de"
          }
        `}
        </script>
      </Helmet>
    </React.Fragment>
  )
}

SEO.defaultProps = {
  lang: `de`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    localFile: PropTypes.object.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO
