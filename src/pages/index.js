import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import BackgroundSection from '../components/Globals/BackgroundSection';
import Footer from '../components/Globals/Footer';
import Title from '../components/Globals/Title';
import Info from '../components/Home/Info';

import SEO from "../components/seo"
// import{
//   FaGulp
// } from 'react-icons/fa';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Coffee Shop" styleClass="default-background"/>
    <Title title="Our Story"/>
    <Info />
    <Footer />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"default-background.jpeg"}){
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
