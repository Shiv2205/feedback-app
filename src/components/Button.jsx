import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, version, type, isDisbled }) {
  return (
    <button type={type} disabled={isDisbled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'secondary',
    type: 'button',
    isDisbled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisbled: PropTypes.bool
}

export default Button