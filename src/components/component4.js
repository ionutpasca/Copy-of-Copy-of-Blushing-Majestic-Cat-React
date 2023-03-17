import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className={`component4-container ${props.rootClassName} `}>
      <h1>{props.heading}</h1>
      <h1>{props.heading1}</h1>
    </div>
  )
}

Component4.defaultProps = {
  heading1: 'Heading',
  heading: 'Heading',
  rootClassName: '',
}

Component4.propTypes = {
  heading1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component4
