import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import device from "../components/devices"

const BannerImage = () => {
  const data = useStaticQuery(graphql`
    query HomeBanner {
      prismic {
        allBanner_homes {
          edges {
            node {
              banner_image
              alternate_text
              external_link {
                _linkType
                ... on PRISMIC__ExternalLink {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  const doc = data.prismic.allBanner_homes.edges[0].node

  const Hero = styled.div`
    background: url(${doc.banner_image.url}) top center no-repeat;
    height: 380px;
    background-size: auto 320px;

    @media ${device.mobileS} {
      height: 380px;
      background-size: auto 380px;
    }
    @media ${device.mobileM} {
      height: 450px;
      background-size: auto 450px;
    }
    @media ${device.mobileL} {
      height: 470px;
      background-size: auto 470px;
    }
    @media ${device.tablet} {
      height: 580px;
      background-size: auto 580px;
    }
    @media ${device.laptop} {
      height: 820px;
      background-size: auto 820px;
    }
    @media ${device.laptopL} {
      height: 880px;
      background-size: auto 880px;
    }
  `

  // Checking if banner image has a link associated with it. If yes, store it in linkurl.
  const linkUrl = doc.external_link ? doc.external_link.url : null

  // Check banner to ensure external link exists.
  if (linkUrl === null) {
    return <Hero />
  } else {
    return (
      <a href={linkUrl}>
        <Hero />
      </a>
    )
  }
}

export default BannerImage
