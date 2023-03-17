import React from 'react'

import PropTypes from 'prop-types'

import './component5.css'

const Component5 = (props) => {
  return (
    <div className={`component5-container ${props.rootClassName} `}>
      <div className="component5-container1"></div>
    </div>
  )
}

Component5.defaultProps = {
  rootClassName: '',
}

Component5.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component5
