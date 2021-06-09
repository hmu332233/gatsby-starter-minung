module.exports = {
  siteMetadata: {
    siteUrl: `https://hmu332233.github.io/gatsby-starter-minung`,
    title: `Gatsby Starter Minung`,
    description: `blog theme with gatsby`,
    author: `[Name]`,
    profile: {
      image: `profile image`,
      name: `[Name]`,
      description: `introduction for profile`,
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          ``, // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minung--dev-log`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 450,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
        enable: process.env.NODE_ENV === 'production',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@containers': 'src/containers',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@utils': 'src/utils',
        },
        extensions: ['js', 'jsx'],
      },
    },
  ],
};
