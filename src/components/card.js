import React from "react"
import styled from "styled-components"
import Button from "./button"

const StyledArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 250px;
  width: 250px;
  border-radius: 10px;
  padding-bottom: 1.5rem;
`

const Card = ({ color, imgSrc, to, title }) => {
  return (
    <StyledArticle
      style={{ background: `url(${imgSrc})`, backgroundSize: "250px" }}
    >
      <Button to={to} color={color}>
        {title}
      </Button>
    </StyledArticle>
  )
}

export default Card
