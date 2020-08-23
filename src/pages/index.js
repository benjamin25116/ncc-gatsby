import React from "react"
import SEO from "../components/layout/seo"
import BannerImage from "../components/bannerImage"
import Card from "../components/card"
import CardsContainer from '../components/cardsContainer'
import Layout from "../components/layout/layout"
import SectionWithButton from "../components/sectionWithButton"
import founders from "../images/loving-family-laughing-at-table-having-cozy-meal-3807571.jpg"
import connectGroup from "../images/Huey-Lin-and-Rolitah-May-2020.jpg"
import genY from "../images/genY.jpg"
import sundaySchool from "../images/sundaySchool.jpg"

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
      <SectionWithButton
        title="Founding Pastors"
        linkTo="/pastors"
        buttonName="Read more"
        imgSrc={founders}
        atlText="Petrina and Pastor Elisha"
        backgroundColor="white"
        buttonColor="var(--orange)"
      >
        <p>
          New Covenant Community was founded by Pastor Elisha Satvinder and his
          wife Petrina over 20 years ago. Dolores et omnis et reprehenderit modi
          qui maxime. Consectetur eaque dolorem officia eaque. Voluptatem omnis
          consequatur praesentium odit enim dolores distinctio quidem. Est
          dolorem quas qui et ipsam. Quis est sit quo molestias et dolor.
        </p>
      </SectionWithButton>
      <SectionWithButton
        title="Our Beliefs"
        linkTo="/beliefs"
        buttonName="Read more"
        backgroundColor="var(--lightYellow)"
        buttonColor="var(--yellow)"
      >
        <p>
          We are a community of Christians, patterned after the Acts 2 model of
          the early church. We believe in the Triune God: the Father, the Son
          and the Holy Spirit. We believe that Jesus is true God and true man,
          and that the Holy Spirit is a divine Person. We believe that the Old
          and New Testaments are God’s divinely inspired words.
        </p>
        <p>
          We believe that all humans have sinned and come short of the glory of
          God and are in need of salvation. We believe that salvation has been
          provided through Jesus Christ for all.
        </p>
      </SectionWithButton>
      <SectionWithButton
        title="Our Ministries"
        titleColor="var(--brown)"
        backgroundColor="white"
        buttonColor="var(--brown)"
      >
        <p style={{ paddingBottom: "1.8rem" }}>
          Apart from our weekly Sunday celebrations, dolores et omnis et
          reprehenderit modi qui maxime. Consectetur eaque dolorem officia
          eaque. Voluptatem omnis consequatur praesentium odit enim dolores
          distinctio quidem. Est dolorem quas qui et ipsam. Quis est sit quo
          molestias et dolor.
        </p>
        <CardsContainer>
          <Card
            title="Connect Group"
            imgSrc={connectGroup}
            to="/"
            color="var(--orange)"
          />
          <Card title="Gen.Y" imgSrc={genY} to="/" color="var(--yellow)" />
          <Card
            title="Sunday School"
            imgSrc={sundaySchool}
            to="/"
            color="var(--green)"
          />
        </CardsContainer>
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
