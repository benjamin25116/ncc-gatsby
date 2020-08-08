import React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      {` `}by{` `}
      <a href="https://www.instagram.com/pitchun_/">@pitchun_</a>
    </footer>
  )
}

export default Footer
