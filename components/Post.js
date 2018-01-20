import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

function createMarkup(html) {
  return { __html: html }
}

const Content = ({ data: { error, post, loading }, ...props }) => {
  if (post) {
    return (
      <article>
        <h1>{post.title}</h1>
        <span>{post.createdAt}</span>
        <div dangerouslySetInnerHTML={createMarkup(post.content)} />
      </article>
    )
  } else {
    return <div>Loading</div>
  }
}

// We use the gql tag to parse our query string into a query document
const contentQuery = gql`
  query contentQuery($id: ID) {
    post(id: $id) {
      id
      title
      content
    }
  }
`

export default graphql(contentQuery, {
  options: ({ id }) => ({
    variables: {
      id
    }
  })
})(Content)
