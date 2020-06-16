import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"

export default () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `}
    render={data => (
      <header className={styles.header}>
        <h1>{data.site.siteMetadata.title}</h1>
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
    )}
  />
)
