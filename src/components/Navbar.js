import React from 'react'
import Globe from '../images/globe-icon.svg'

export default function Navbar() {
  return (
    <div>
      <nav className='nav--center'>
        <a href='/' className='nav--heading'>
          <img src={Globe} alt='Globe' className='nav--logo' />
          <h2 className='nav--text'>my travel journal.</h2>
        </a>
      </nav>
    </div>
  )
}
