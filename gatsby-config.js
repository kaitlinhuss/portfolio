const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://kaitlinhuss.com/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: `Kaitlin Huss Portfolio`,
    description: `Personal portfolio of Kaitlin Huss written in and made possible with GatsbyJS.`,
    author: `@gatsbyjs`,
    siteUrl: `https://kaitlinhuss.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154844783-1",
        head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Condensed`,
          `source sans pro\:300,400,400i,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://kaitlinhuss.com/',
        sitemap: 'https://kaitlinhuss.com//sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: '#24bae8',
        zIndex: 9999,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#24bae8`,
        showSpinner: false,
      },
    },
  ],
}
