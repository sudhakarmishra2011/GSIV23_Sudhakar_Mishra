import React from 'react'
import './style.css'
import homeIcon from '../../assets/home.png'

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className="searchContainer">
        <input type='text' className="icon" placeholder='Search'/>
      </div>
      <div className="homeIconContainer">
        <img src={homeIcon} alt='homeIcon' className='homeIcon'/>
      </div>
    </div>
  )
}

export default Header