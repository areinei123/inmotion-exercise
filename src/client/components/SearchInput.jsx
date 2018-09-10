import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = ({value, onChange}) => {
  return(
    <input value={value} className="form-control" type="text" 
      placeholder="Search Anything"
      onChange={(event) => onChange(event.target.value)}/>
  )
}

export default SearchInput
