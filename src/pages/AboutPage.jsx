import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function AboutPage({ reverse }) {
  return (
    <Card reverse={reverse}>
        <p>About Page</p>
        <Link to="/">Back to Home page</Link>
    </Card>
  )
}

export default AboutPage