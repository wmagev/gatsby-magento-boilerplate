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
        graphqlEndpoint: "http://tealium.loc:8888/graphql"
      }
    }
  ],
}
