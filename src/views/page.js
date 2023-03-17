import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>dsadsa</title>
        <meta name="description" content="bfpj dosahidush aiuhdisadsa" />
        <meta property="og:title" content="bfgbfnhg" />
        <meta property="og:description" content="nghnhg" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-assets-qa_/66fd6db3-d0ee-4a1a-9747-e58ab0724a25/78d433c8-d97e-475e-8552-f470436a695d?org_if_sml=1"
        />
      </Helmet>
      <h1>Heading</h1>
      <div className="page-container1"></div>
      <h1>Heading</h1>
      <AppComponent rootClassName="app-component-root-class-name1"></AppComponent>
      <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
    </div>
  )
}

export default Page
