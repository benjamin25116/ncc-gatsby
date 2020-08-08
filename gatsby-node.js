// const path = require("path")

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   const result = await graphql(
//     `
//       query AllPosts {
//         prismic {
//           allPosts {
//             edges {
//               cursor
//             }
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   // Create blog-list pages
//   const posts = result.data.prismic.allPosts.edges
//   const postsPerPage = 3
//   const numPages = Math.ceil(posts.length / postsPerPage)
  
//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/blog` : `/blog/${i + 1}`,
//       component: path.resolve("./src/templates/postPage.js"),
//       context: {
//         currentPage: i + 1,
//         cursor: posts[i * 3 + 3].cursor? posts[i * 3 + 3].cursor : posts[i * 3 + 3].cursor,
//         postPerPage: postsPerPage,
//       },
//     })
//   })
// }
