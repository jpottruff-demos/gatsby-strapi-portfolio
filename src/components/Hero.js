import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {

  // const data = useStaticQuery(query);
  // console.log(data);

  // Many ways to destructure 'data' above - just doing this:
  const {
    file: {
      childImageSharp: { fluid }
    },
  } = useStaticQuery(query);

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm jeff</h1>
            <h4>freelance web blah blah blah</h4>
            <Link to='/content' className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
