import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: var(--green);
  height: 50px;
  padding: 1rem; 2rem;
`
const Copyright = styled.p`
  font-weight: bold;
  color: var(--bodyText);
  max-width: 900px;
  margin: auto;
  text-align: right;
  a {
    color: var(--bodyText);
    text-decoration: underline;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` `}by{` `}
        <a href="https://www.instagram.com/pitchun_/">Ben</a>
      </Copyright>
    </StyledFooter>
  )
}

export default Footer
