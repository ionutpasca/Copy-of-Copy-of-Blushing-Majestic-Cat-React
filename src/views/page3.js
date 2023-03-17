import React from 'react'

import { Helmet } from 'react-helmet'

import './page3.css'

const Page3 = (props) => {
  return (
    <div className="page3-container">
      <Helmet>
        <title>Page3 - Copy of Copy of Blushing Majestic Cat</title>
        <meta
          property="og:title"
          content="Page3 - Copy of Copy of Blushing Majestic Cat"
        />
      </Helmet>
      <h1>Heading</h1>
      <textarea
        placeholder="placehlkjh gbujholder"
        className="page3-textarea textarea"
      ></textarea>
    </div>
  )
}

export default Page3
