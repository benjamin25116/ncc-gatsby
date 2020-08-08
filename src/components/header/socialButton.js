import React from "react"
import styled from "styled-components"

const SocialLink = styled.a`
align-items: center;
  display: flex;
  padding: 0 5px;
`
const Icon = styled.img`
  height: 25px;
  max-width: none; // Prevent images from collapsing
  margin: 0px;
`

const SocialButton = ({ href, src, alt }) => {
  return (
    <SocialLink href={href}>
      <Icon src={src} alt={alt} />
    </SocialLink>
  )
}

export default SocialButton
