import React from 'react'
import PropTypes from 'prop-types'
import NavigationCard from '../containers/NavigationCard.jsx'

const Navigation = () => {

  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <NavigationCard title='movies' icon=''/>
        </div>
        <div className='col'>
          <NavigationCard title='actors' icon=''/>
        </div>
        <div className='col'>
          <NavigationCard title='roles' icon=''/>
        </div>
        <div className='col'>
          <NavigationCard title='search' icon=''/>
        </div>
      </div>
    </div>
  )
}

export default Navigation 
