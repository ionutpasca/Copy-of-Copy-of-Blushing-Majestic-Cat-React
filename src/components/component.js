import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  const [isVisible, setIsVisible] = useState('fdsfdsbfgf')
  return (
    <div className={`component-container ${props.rootClassName} `}>
      {props.children}
      <input type="text" placeholder={isVisible} className="input" />
    </div>
  )
}

AppComponent.defaultProps = {
  textinput_placeholder: 'placeholder',
  link_container1: '',
  rootClassName: '',
}

AppComponent.propTypes = {
  textinput_placeholder: PropTypes.string,
  link_container1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
