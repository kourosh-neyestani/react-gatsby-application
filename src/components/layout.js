import React from "react"
import styles from "./layout.module.scss"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}
