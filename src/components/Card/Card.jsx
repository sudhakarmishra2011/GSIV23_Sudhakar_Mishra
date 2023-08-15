import React from 'react'
import './style.css'
import logo from '../../assets/spiderman.jpg'

const Card = (props) => {
  return (
   <div className="cardContainer">
    <div className="cardElement">
        <div className="movieImage">
        <img src={logo} height={150} alt='img'/>
        </div>
        <div className="movieDetails">
            <div className="movieTitle">Movie Title</div>
            <div className="rating">(Rating)</div>
        </div>
        <div className="description">
        Description
        </div>
    </div>
   </div>
  )
}

export default Card