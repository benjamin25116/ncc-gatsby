module.exports = {
  siteMetadata: {
    title: `New Covenant Community Sentul`,
    description: `A diverse and vibrant community of believers, loving and living like Jesus.`,
    author: `@pitchun_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "ncc-prismic", // (REQUIRED, replace with your own)
        accessToken:
          "MC5YdHhvOEJBQUFDTUFSRTU5.77-9F--_vRQgcwJVRe-_vUQ977-977-9FO-_ve-_ve-_ve-_vVFX77-9QWYa77-9Du-_ve-_vXzvv71D", // (optional API access token)
        path: "/preview", // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [
          {
            // (optional, builds pages dynamically)
            type: "Post", // TypeName from prismic
            match: "/messages/:uid", // Pages will be generated under this pattern
            path: "/messages", // Placeholder page for unpublished documents
            component: require.resolve("./src/templates/post.js"),
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `New Covenant Community`,
        short_name: `NCC Sentul`,
        start_url: `/`,
        background_color: `#EB6325`,
        theme_color: `#FBAF34`,
        display: `minimal-ui`,
        icon: `src/images/ncc-logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
