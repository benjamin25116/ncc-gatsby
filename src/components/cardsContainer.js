import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const CardsContainer = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>
}

export default CardsContainer
