const fs = require('fs-jetpack')
const { md, parsePost } = require('./md')
const path = require('path')
const CONTENTS_PATH = path.resolve(`${__dirname}/../content`)
const fetch = require('isomorphic-fetch')
const POSTS_PATH = `${CONTENTS_PATH}/posts`

const resolvers = {
  Query: {
    posts: async () => {
      const files = await fs.listAsync(POSTS_PATH)
      const proms = files.map(f => parsePost(`${POSTS_PATH}/${f}`))
      return Promise.all(proms)
    },
    post: (_, { id }) => {
      return parsePost(`${POSTS_PATH}/${id}.md`)
    },
    content: (_, { url }) => {
      return fetch(url)
        .then(res => res.text())
        .then(md)
    }
  }
}

module.exports = resolvers
