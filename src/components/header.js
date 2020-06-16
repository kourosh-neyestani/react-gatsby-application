import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
        <li>
          <Link to={`/contact`}>Contact</Link>
        </li>
      </ul>
    </header>
  )
}
