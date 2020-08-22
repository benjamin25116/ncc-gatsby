import React from "react"
import Button from "../components/button"
import styled from "styled-components"
import device from "../components/devices"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 450px;
  padding: 2.5rem;
`

const StyledTitle = styled.h2`
  text-align: center;
  font-family: "Brush Script MT", cursive;
  font-size: 4rem;

  @media ${device.tablet} {
    font-size: 8rem;
  }
`

const StyledBody = styled.p`
  text-align: center;
  margin-bottom: 2.5rem;
  max-width: 900px;
  font-size: 1.2rem;
  line-height: 1.6rem;

  @media ${device.tablet} {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 3.5rem;
  }
`

const SectionWithButton = ({
  children,
  title,
  linkTo,
  buttonName,
  backgroundColor,
  buttonColor,
}) => {
  const sectionBackground = {
    background: `${backgroundColor}`,
  }
  return (
    <StyledSection style={sectionBackground}>
      <StyledTitle style={{ color: buttonColor }}>{title}</StyledTitle>
      <StyledBody>{children}</StyledBody>
      <Button to={linkTo} color={buttonColor}>
        {buttonName}
      </Button>
    </StyledSection>
  )
}

export default SectionWithButton
