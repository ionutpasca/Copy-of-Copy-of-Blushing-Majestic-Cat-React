import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import './page1.css'

const Page1 = (props) => {
  return (
    <div className="page1-container">
      <Helmet>
        <title>Page1 - Copy of Copy of Blushing Majestic Cat</title>
        <meta
          property="og:title"
          content="Page1 - Copy of Copy of Blushing Majestic Cat"
        />
      </Helmet>
      <AppComponent rootClassName="app-component-root-class-name2"></AppComponent>
    </div>
  )
}

export default Page1
