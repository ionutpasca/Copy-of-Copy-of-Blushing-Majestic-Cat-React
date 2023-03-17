import React from 'react'

import { Helmet } from 'react-helmet'

import Component41 from '../components/component41'
import Component2 from '../components/component2'
import './home4.css'

const Home4 = (props) => {
  return (
    <div className="home4-container">
      <Helmet>
        <title>Home4 - Copy of Copy of Blushing Majestic Cat</title>
        <meta
          property="og:title"
          content="Home4 - Copy of Copy of Blushing Majestic Cat"
        />
      </Helmet>
      <h1 className="home4-text Heading">Heading</h1>
      <div className="home4-container1">
        <Component41></Component41>
        <Component41 rootClassName="component41-root-class-name8"></Component41>
      </div>
      <Component2></Component2>
      <div className="home4-container2">
        <h1 className="home4-text1">Heading</h1>
      </div>
    </div>
  )
}

export default Home4
