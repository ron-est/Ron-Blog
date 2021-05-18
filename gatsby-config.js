module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Ron's Blog`,
    author: `Ronald Esteban`,
    description: `Bikes, music, baking, anime, or maybe even some code. Not entirely sure what I'll be putting here yet.`,
    social: [
      {
        name: `Linkedin`,
        url: `https://www.linkedin.com/in/ronald-esteban-1523901b6/`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/ron-est`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
