import React from "react"
import { graphql, Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout/layout"
import ReadTime from "../components/posts/readTime"
import SEO from "../components/layout/seo"

export const postQuery = graphql`
  query PageQuery($uid: String) {
    prismic {
      allPosts(uid: $uid) {
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

const Post = ({ data }) => {
  const doc = data.prismic.allPosts.edges

  return (
    <Layout>
      <SEO title={doc[0].node.title[0].text} />
      <RichText render={doc[0].node.title} />
      <span>{doc[0].node.date} </span> • <ReadTime post={doc[0]} />
      <RichText render={doc[0].node.body} />
      <Link to="/messages">Back to Messages</Link>
    </Layout>
  )
}

export default Post
