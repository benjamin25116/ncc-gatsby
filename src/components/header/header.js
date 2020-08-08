import React, { useState } from "react"
import { Link } from "gatsby"
import MenuButton from "../header/menuButton"
import logo from "../../images/ncc-logo.svg"
import fb from "../../images/fb-icon.png"
import ig from "../../images/ig-icon.png"
import yt from "../../images/yt-icon.png"
import styled from "styled-components"
import SocialButton from "../header/socialButton"
import device from "../devices"

const StyledHeader = styled.header`
  align-items: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px 10px 20px;
  position: fixed;
  top: 0px;
  width: 100%;
`

const NavBar = styled.nav`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 0 10px;
  width: 100vw;
`
const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2em;
  font-weight: light;
  height: 50px;
  padding-right: 15px;
  text-align: right;
`

const MenuList = styled.ul`
  display: none;
  flex-wrap: wrap;
  margin: 0;

  ${device.mobileS} {
  }
`
const Social = styled.div`
  display: none;
  justify-content: center;
  padding: 0.35em 0;
  flex: 1 1 9.3em;
  // border: solid 1px orange;
`

const Logo = styled.img`
  height: 70px;
  max-width: none;
  margin: 0;
`

const Header = () => {
  const pages = [
    { name: "Home", url: "/" },
    { name: "Messages", url: "/messages" },
    { name: "Happenings", url: "/happenings" },
    { name: "Ministries", url: "/ministries" },
    { name: "Beliefs", url: "/beliefs" },
    { name: "Pastors", url: "/pastors" },
    { name: "Giving", url: "/giving" },
    { name: "Location", url: "/location" },
  ]

  const social = [
    {
      imgSrc: ig,
      url: "https://www.instagram.com/newcovenantcommunity/",
      alt: "link to Instagram",
    },
    {
      imgSrc: fb,
      url: "https://www.facebook.com/nccmalaysia",
      alt: "link to Facebook",
    },
    {
      imgSrc: yt,
      url: "https://www.youtube.com/channel/UCMPRCAVfEvwmpFR5BfGweGQ/videos",
      alt: "link to YouTube",
    },
  ]

  const [toggle, setToggle] = useState(0)

  function toggleMenu() {
    let menuList = document.getElementById("menu-list")
    let menuSocial = document.getElementById("menu-social")
    let closeButton = document.getElementById("menu-close")
    let header = document.getElementById("styled-header")
    if (toggle === 0) {
      menuList.style.display = "flex"
      menuSocial.style.display = "flex"
      closeButton.innerHTML = "&#215;"
      closeButton.style.fontSize = "1.85em"
      header.style.background = `linear-gradient(
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 0.35) 101%
  )`
      header.style.height = "100vh"
      setToggle(1)
    } else {
      menuList.style.display = "none"
      menuSocial.style.display = "none"
      closeButton.innerHTML = "&#9776;"
      closeButton.style.fontSize = "1.2em"
      header.style.background = `linear-gradient(
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 0) 100%
  )`
      header.style.height = ""
      setToggle(0)
    }
  }

  return (
    <StyledHeader id="styled-header">
      <NavBar id="nav-bar">
        <LogoContainer>
          <Link to="/">
            <Logo src={logo} alt="New Covenant Community" />
          </Link>
          <CloseButton id="menu-close" onClick={toggleMenu}>
            &#9776;
          </CloseButton>
        </LogoContainer>
        <MenuList id="menu-list">
          {pages.map(page => {
            return <MenuButton key={page.name} to={page.url} name={page.name} />
          })}
          <Social id="menu-social">
            {social.map(icon => {
              return (
                <SocialButton
                  key={icon.alt}
                  href={icon.url}
                  src={icon.imgSrc}
                  alt={icon.alt}
                />
              )
            })}
          </Social>
        </MenuList>
      </NavBar>
    </StyledHeader>
  )
}

export default Header
