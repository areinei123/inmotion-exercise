import React from 'react'
import PropTypes from 'prop-types'
import {capitalize} from 'lodash'

const Card = ({title, icon, active, page, onClick}) => {

  let colors = {
    movies: 'primary',
    actors: 'success',
    roles: 'danger',
    search: 'warning'
  }

  let className = active || page === 'home'
    ? 'card bg-'+colors[title]
    : 'card bg-light border border-'+colors[title]

  let style = {
    transition: "background-color 0.5s ease"
  }

  return(
    <div className={className} style={style} onClick={() => onClick(title)}>
      <div className='card-body text-center'>
        <span>{icon}</span>
        <h5 className='card-title'>{capitalize(title)}</h5>
      </div>
    </div> 
  )
}

export default Card 
