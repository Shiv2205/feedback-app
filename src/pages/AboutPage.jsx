import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Spinner from '../components/Spinner'

function AboutPage({ reverse }) {
  return (
    <>
      <Card reverse={reverse}>
          <h1>About Page</h1>
          <p>Nothing is actually loading. This is just to display the loading animation which, unfortunately, is not visible because the data for this project is static.</p>
          <Link to="/">Back to Home page</Link>
      </Card>
      <Spinner/>
    </>
  )
}

export default AboutPage