import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = styled.div`
  height: 50px;
  width: 200px;
  padding-top: 15px;
  border-radius: 50px;
  // box-shadow: 0 2px 4px rgb(70, 70, 70);
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;

  :hover {
    color: var(--bodyText);
  }
`

const Button = ({ children, to, color }) => {
  return (
    <Link to={to}>
      <StyledButton style={{ background: color }}>{children}</StyledButton>
    </Link>
  )
}

export default Button
