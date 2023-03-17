import React from 'react'

import PropTypes from 'prop-types'

import './component41.css'

const Component41 = (props) => {
  return (
    <div className={`component41-container ${props.rootClassName} `}>
      <h1 className="component41-text">{props.heading}</h1>
      <h1 className="">{props.heading1}</h1>
    </div>
  )
}

Component41.defaultProps = {
  rootClassName: '',
  heading1: 'Heading',
  heading: 'Heading',
}

Component41.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
}

export default Component41
