import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import BannerImage from "../components/bannerImage"
import SEO from "../components/layout/seo"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <BannerImage />
      <Link to="/messages">To Messages</Link>
    </Layout>
  )
}

export default Home
