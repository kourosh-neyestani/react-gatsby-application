import React from "react"
import styles from "./about.module.css"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1 className={styles.title}>About Page</h1>
      <p className={styles.subTitle}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ea
        adipisci consectetur doloribus dolore cumque dolores voluptate quos
        expedita, inventore optio non quo possimus nesciunt et beatae! Dolores,
        dolore sequi.
      </p>
    </Layout>
  )
}
