'use strict'

module.exports = {
  siteMetadata: {
    title: 'gatsby-starter-typescript-plus',
    description: 'Based on gatsby-starter-typescript-plus.',
    keywords: 'gatsbyjs, gatsby, autocomplete, apollo, codegen',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
    author: {
      name: 'Denis Augsburger',
      url: 'https://twitter.com/denisaugsburger',
      email: 'denis.augsburger@twteam.ch'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-codegen',
      options: {}
    },
    {
      resolve: 'gatsby-source-wikipedia',
      options: {
        // For each query, the plugin will go to Wikipedia's API and search for the query
        // and fetch the top articles to the specified limit.
        queries: [
          {
            query: `graphql`,
            limit: 5
          },
          {
            query: `typescript`,
            limit: 10
          },
          {
            query: `apollo`,
            limit: 10
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain the remote schema Query type
        typeName: 'SWAPI',
        // This is the field under which it's accessible
        fieldName: 'swapi',
        // URL to query from
        url: 'https://api.graphcms.com/simple/v1/swapi'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
