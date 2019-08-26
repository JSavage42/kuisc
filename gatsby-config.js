module.exports = {
  siteMetadata: {
    title: `University of Kansas' Information Security Club`,
    short_title: `KUISC`,
    description: `The website for the Jayhackers!`,
    author: `@thesavage_dev`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#1c53b3`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `University of Kansas' Information Security Club (Jayhackers)`,
        short_name: `KUISC`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#1c53b3`,
        display: `minimal-ui`,
        icon: `src/images/jayHawk.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
