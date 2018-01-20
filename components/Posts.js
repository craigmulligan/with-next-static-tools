import react, { component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next-static-tools/link'

const Posts = ({ data: { error, posts, loading } }) => {
  return (
    <article>
      <h3>Latest Posts</h3>
      {posts &&
        posts.map(p => {
          return (
            <div key={p.id}>
              <p>
                <span>{p.createdAt}</span>
                &nbsp;-&nbsp;
                <Link
                  prefetch
                  withData
                  href={{ pathname: `/post`, query: { id: p.id } }}
                  as={`/post/${p.id}`}
                >
                  <a>{p.title}</a>
                </Link>
              </p>
            </div>
          )
        })}
    </article>
  )
}

// We use the gql tag to parse our query string into a query document
const postsQuery = gql`
  query postsQuery {
    posts {
      id
      title
      createdAt
    }
  }
`

export default graphql(postsQuery)(Posts)
