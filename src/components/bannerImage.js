import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
  // console.log(doc)
  return (
    <a href={doc.external_link.url}>
      <img src={doc.banner_image.url} alt={doc.alternate_text} />
    </a>
  )
}

export default BannerImage
