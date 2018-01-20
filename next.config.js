// next.config.js
const resolvers = require('./lib/resolvers')
const typeDefs = require('./lib/typeDefs')
const gql = require('graphql-tag')

module.exports = {
  exportPathMap: async client => {
    const query = gql`
      query postsQuery {
        posts {
          id
        }
      }
    `

    const { data } = await client.query({ query })

    return data.posts.reduce(
      (acc, post) => {
        acc[`/post/${post.id}`] = { page: '/post', query: { id: post.id } }
        return acc
      },
      {
        '/': { page: '/' },
        '/about': { page: '/about' }
      }
    )
  },
  typeDefs,
  resolvers,
  webpack: (config) => {
    console.log('called')
    return config
  }
}
