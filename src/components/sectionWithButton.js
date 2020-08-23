import React from "react"
import Button from "../components/button"
import styled from "styled-components"
import device from "../components/devices"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
`

const StyledImage = styled.img`
  max-width: 900px;
  width: 100vw;
`

const StyledTitle = styled.h2`
  text-align: center;
  font-family: "Brush Script MT", cursive;
  font-size: 4rem;

  @media ${device.tablet} {
    font-size: 8rem;
  }
`

const StyledBody = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  max-width: 900px;
  font-size: 1.2rem;
  line-height: 1.6rem;

  @media ${device.mobileS} {
    width: 270px;
  }
  @media ${device.mobileM} {
    width: 300px;
  }
  @media ${device.mobileL} {
    width: 360px;
  }
  @media ${device.tablet} {
    font-size: 1.3rem;
    line-height: 2rem;
    width: 650px;
  }
`

const SectionWithButton = ({
  children,
  title,
  linkTo,
  buttonName,
  backgroundColor,
  buttonColor,
  imgSrc,
  altText,
}) => {
  return (
    <StyledSection style={{ background: `${backgroundColor}` }}>
      {imgSrc ? <StyledImage src={imgSrc} alt={altText} /> : null}
      <StyledTitle style={{ color: buttonColor }}>{title}</StyledTitle>
      <StyledBody>{children}</StyledBody>
      {buttonName ? (
        <Button to={linkTo} color={buttonColor}>
          {buttonName}
        </Button>
      ) : null}
    </StyledSection>
  )
}

export default SectionWithButton
