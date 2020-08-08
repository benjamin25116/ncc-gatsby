import React from "react"

const ReadTime = ({ post }) => {
  let text, wordCount, seconds

  post.node.body.forEach(paragraph => {
    text += paragraph.text + " "
  })
  // get number of words
  wordCount = text.split(" ").length

  // get read time based on average of 200 words per minute
  seconds = (wordCount / 200) * 60

  return (
    <span>
      {seconds < 60 ? "1 min read" : `${Math.ceil(seconds / 60)} mins read`}
    </span>
  )
}

export default ReadTime
