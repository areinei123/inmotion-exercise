import React from 'react'
import PropTypes from 'prop-types'

const Button = ({label, color, onClick}) => {
  return (
    <button type="button"
      className={"btn btn-"+color+" btn-sm"}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
