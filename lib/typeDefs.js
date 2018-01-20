const typeDefs = `
  type Post {
    id: ID
    title: String
    content: String 
    createdAt: String 
  }

  type Query {
    posts: [Post]!
    post(id: ID): Post
    content(url: String): String
  }
`

module.exports = typeDefs
