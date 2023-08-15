import React from 'react'
import './style.css'
import homeIcon from '../../assets/home.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='headerContainer'>
      <div className="searchContainer">
        <input type='text' className="icon" placeholder='Search'/>
      </div>
      <div className="homeIconContainer" onClick={() => navigate("/")}>
        <img src={homeIcon} alt='homeIcon' className='homeIcon'/>
      </div>
    </div>
  )
}

export default Header