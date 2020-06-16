import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <Link to={`/`}>Home </Link>
      <Link to={`/about`}>About </Link>
      <Link to={`/contact`}>Contact </Link>
    </Layout>
  )
}
