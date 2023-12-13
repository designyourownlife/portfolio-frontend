/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || `http://localhost:1337`,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [`story`],
  singleTypes: [
    // `imprint`,
    {
      singularName: `hero`,
      queryParams: {
        populate: {
          hero_image: "*",
          card_image: "*",
        },
      },
    },
    {
      singularName: `showcase`,
      queryParams: {
        populate: {
          portfolio: { populate: "*" },
          twitter: { populate: "*" },
          hero_image: "*",
        },
      },
    },
    {
      singularName: `about`,
      queryParams: {
        populate: {
          stack: { populate: "*" },
          twitter: { populate: "*" },
          hero_image: "*",
        },
      },
    },
    {
      singularName: `imprint`,
      queryParams: {
        populate: {
          twitter: { populate: "*" },
          hero_image: "*",
        },
      },
    },
    ``,
  ],
  queryLimit: 5000,
}

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `m/s WebDev – Matthias Schreiber`,
    description: `Frontend Web Developer | JavaScript, React, Gatsby, Node.js, Express, Strapi, WordPress, Squarespace`,
    author: `Matthias Schreiber`,
    keywords: [
      "Webdev",
      "Frontend",
      "Websites",
      "JavaScript",
      "React",
      "Gatsby",
      "Node.js",
      "Express",
      "Strapi",
      "WordPress",
      "Squarespace",
      "Webdesign",
    ],
    siteUrl: `https://ms-webdev-portfolio.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: "dkf2lil",
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`Karla\:300,300i,400,400i,700,700i,800,800i`],
    //     display: `swap`,
    //   },
    // },
  ],
}
