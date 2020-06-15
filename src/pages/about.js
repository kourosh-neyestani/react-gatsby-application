import React from "react"
import { Link } from "gatsby"

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to={`/`}>Home </Link>
      <Link to={`/about`}>About </Link>
      <Link to={`/contact`}>Contact </Link>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ea
        adipisci consectetur doloribus dolore cumque dolores voluptate quos
        expedita, inventore optio non quo possimus nesciunt et beatae! Dolores,
        dolore sequi.
      </p>
    </div>
  )
}
