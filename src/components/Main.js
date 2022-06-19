import React from 'react'
import LocIcon from '../images/location.svg'

export default function Main(props) {
  return (
    <div className='card--inner'>
      <img src={props.imageUrl} alt={props.title} className='card--image' />
      <div className='card--info'>
        <img
          src={LocIcon}
          alt='Location Icon'
          className='card--location--icon'
        />
        <span className='card--location'>{props.location.toUpperCase()}</span>
        <a
          href={props.googleMapsUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='card--map'
        >
          View on Google Map
        </a>
        <span className='card--title'>{props.title}</span>
        <span className='card--date'>
          {props.startDate} - {props.endDate}
        </span>
        <p className='card--description'>{props.description}</p>
      </div>
    </div>
  )
}
