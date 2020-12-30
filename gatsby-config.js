/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-magento2",
      options: {
        graphqlEndpoint: "http://demo-m2.bird.eu/graphql"
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      
      },
    },
    `gatsby-plugin-typography`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`
  ],  
}
