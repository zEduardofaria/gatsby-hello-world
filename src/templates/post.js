import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>title</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostPage($slug String!) {
    markdownRemark(frontmatter: { path: { eq: "/utilizando-gatsby" }}) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`

export default IndexPage
