import React from 'react'

import { Helmet } from 'react-helmet'

import Component41 from '../components/component41'
import Component2 from '../components/component2'
import './home3.css'

const Home3 = (props) => {
  return (
    <div className="home3-container">
      <Helmet>
        <title>Home3 - Copy of Copy of Blushing Majestic Cat</title>
        <meta
          property="og:title"
          content="Home3 - Copy of Copy of Blushing Majestic Cat"
        />
      </Helmet>
      <h1 className="home3-text Heading">Heading</h1>
      <div className="home3-container1">
        <Component41></Component41>
        <Component41 rootClassName="component41-root-class-name7"></Component41>
      </div>
      <Component2></Component2>
      <div className="home3-container2">
        <h1 className="home3-text1">Heading</h1>
      </div>
    </div>
  )
}

export default Home3
