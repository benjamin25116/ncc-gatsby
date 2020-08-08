import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ListItem = styled.li`
  align-items: center;
  display: flex;
  flex: 1 1 11em;
  // border: solid 1px green;
  font-size: 0.85em;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 1.2em 0.9em;
  text-align: center;
`
const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
`

const MenuButton = ({ to, name }) => {
  return (
    <ListItem>
      <StyledLink to={to} activeStyle={{ color: "orange" }}>
        {name}
      </StyledLink>
    </ListItem>
  )
}

export default MenuButton
