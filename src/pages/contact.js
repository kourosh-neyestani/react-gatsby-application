import React from "react"
import { Link } from "gatsby"
import styles from "./contact.module.scss"

export default () => (
  <div className={styles.contact}>
    <h1 className={styles.title}>Contact Me</h1>
    <Link to={`/`}>Home </Link>
    <Link to={`/about`}>About </Link>
    <Link to={`/contact`}>Contact </Link>
    <p className={styles.subTitle}> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rem
      laboriosam voluptatem ea explicabo quidem vitae delectus tempora maiores
      magnam tenetur facilis corporis at quam illo, similique repellendus porro
      voluptates.
    </p>
  </div>
)
