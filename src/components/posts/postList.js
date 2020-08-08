import React from "react"
import { Link } from "gatsby"
import { linkResolver } from "../../utils/linkResolver"
import ReadTime from "../posts/readTime"

const PostList = ({ data }) => {
  const posts = data.prismic.allPosts.edges
  /*
 TODO:
 1. Render only 5 messages initially. 
 2. Render page buttons.
 3. Write function to update ul with new list as page buttons are pressed. 
 */

  return (
    <ul>
      {posts.map(edge => {
        return (
          <li key={edge.node._meta.uid}>
            <h2>
              <Link to={linkResolver(edge.node._meta)}>
                {edge.node.title[0].text}
              </Link>
            </h2>
            <span>{edge.node.date}</span> • <ReadTime post={edge} />
          </li>
        )
      })}
    </ul>
  )
}

export default PostList
