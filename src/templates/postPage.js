// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"

// const PostPage = ({ data }) => {
//   const doc = data.prismic.allPosts.edges
//   return (
//     <Layout>
//       {doc.map(edge => {
//         return (
//           <div key={edge.node.date}>
//             <h2>{edge.node.title[0].text}</h2>
//             <p>{edge.node.date}</p>
//           </div>
//         )
//       })}
//     </Layout>
//   )
// }

// export const blogList = graphql`
//   query posts($cursor: String!, $postPerPage: Int!) {
//     prismic {
//       allPosts(sortBy: meta_firstPublicationDate_DESC, before: $cursor, first: $postPerPage) {
//         edges {
//           node {
//             body
//             date
//             title
//           }
//         }
//       }
//     }
//   }
// `

// export default PostPage
