import React from "react"
import Layout from "../components/layout"

export default function Home({data}) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
    </Layout>
  )
}

export const query = graphql `{
  site {
   siteMetadata {
     title
     siteUrl
     description
   }
  }
}`