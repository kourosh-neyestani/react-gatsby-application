import React from "react"
import styles from "./contact.module.scss"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div className={styles.contact}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.subTitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem
        laboriosam voluptatem ea explicabo quidem vitae delectus tempora maiores
        magnam tenetur facilis corporis at quam illo, similique repellendus
        porro voluptates.
      </p>
    </div>
  </Layout>
)
