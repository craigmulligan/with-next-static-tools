// next.config.js
const resolvers = require('./lib/resolvers')
const typeDefs = require('./lib/typeDefs')
const gql = require('graphql-tag')

module.exports = {
  exportPathMap: client => async () => {
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
  resolvers
}
