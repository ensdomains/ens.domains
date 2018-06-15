module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Overpass\:100,200,300,400,500,700,800,900`,
          `Karma: 300,200,100`,
        ],
      },
    },
  ],
}
