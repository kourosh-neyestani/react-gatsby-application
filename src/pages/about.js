import React from "react"
import { Link } from "gatsby"
import styles from "./about.module.css"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1 className={styles.title}>About Page</h1>
      <Link to={`/`}>Home </Link>
      <Link to={`/about`}>About </Link>
      <Link to={`/contact`}>Contact </Link>
      <p className={styles.subTitle}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ea
        adipisci consectetur doloribus dolore cumque dolores voluptate quos
        expedita, inventore optio non quo possimus nesciunt et beatae! Dolores,
        dolore sequi.
      </p>
    </Layout>
  )
}
