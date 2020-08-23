import React from "react"
import styled from "styled-components"
import Button from "./button"

const StyledArticle = styled.article`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-end;
  height: 200px;
  border-radius: 10px;
  padding-bottom: 1.5rem;
  margin: 0 0.5rem 1rem 0.5rem;
`

const Card = ({ color, imgSrc, to, title }) => {
  return (
    <StyledArticle
      style={{
        background: `url(${imgSrc}) center center`,
        backgroundSize: "cover",
      }}
    >
      <Button to={to} color={color}>
        {title}
      </Button>
    </StyledArticle>
  )
}

export default Card
