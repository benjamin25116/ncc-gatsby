import React from "react"
import PostList from "../components/posts/postList"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { graphql } from "gatsby"

export const postQuery = graphql`
  query AllPosts {
    prismic {
      allPosts(sortBy: meta_lastPublicationDate_DESC) {
        edges {
          node {
            body
            date
            title
            _meta {
              uid
              type
            }
          }
        }
      }
    }
  }
`

const Messages = ({ data }) => {
  return (
    <Layout>
      <SEO title="Messages" />
      <h1>Messages</h1>
      <PostList data={data} />
    </Layout>
  )
}

export default Messages
