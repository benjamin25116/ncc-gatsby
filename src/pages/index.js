import React from "react"
import Layout from "../components/layout/layout"
import BannerImage from "../components/bannerImage"
import SEO from "../components/layout/seo"
import SectionWithButton from "../components/sectionWithButton"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <BannerImage />
      <SectionWithButton
        title="Welcome"
        linkTo="/location"
        buttonName="Find us"
        backgroundColor="var(--lightGreen)"
        buttonColor="var(--green)"
      >
        <p>
          At New Covenant Community we are focused on loving Jesus and sharing
          His love. Come and experience God with us and be part of our church
          community. There is so much more to life. Join us as we live life
          together while building an amazing church that impacts our friends,
          family and the world.
        </p>
      </SectionWithButton>
    </Layout>
  )
}

export default Home

/*

RGB color guide:
Lighter gray: --titleText
Darker gray:  --bodyText

NCC Dark Orange:  --darkOrange
NCC Orange:  --orange
Light Orange: --lightOrange
NCC Green:  --green
Light Green: --lightGreen
NCC Yellow:  --yellow
Light Yellow: --lightYellow
NCC Brown:  --brown
Light Brown: --lightBrown

*/
