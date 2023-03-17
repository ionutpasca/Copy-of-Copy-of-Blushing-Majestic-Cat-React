import React from 'react'

import { Helmet } from 'react-helmet'

import './page2.css'

const Page2 = (props) => {
  return (
    <div className="page2-container">
      <Helmet>
        <title>Page2 - Copy of Copy of Blushing Majestic Cat</title>
        <meta
          property="og:title"
          content="Page2 - Copy of Copy of Blushing Majestic Cat"
        />
      </Helmet>
      <h1>Heading</h1>
      <div className="page2-container1"></div>
    </div>
  )
}

export default Page2
