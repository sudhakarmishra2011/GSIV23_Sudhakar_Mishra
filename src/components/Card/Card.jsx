import React from 'react'
import './style.css'
import logo from '../../assets/spiderman.jpg'

const Card = ({data}) => {
    console.log(data)
    let url = "https://image.tmdb.org/t/p/original";

  return (
   <div className="cardContainer">
    {data && data.map && data.map((dt)=>
        <div className="cardElement" key={dt.id}>
        <div className="movieImage">
        <img src={url + dt.poster_path} height={150} alt='img'/>
        </div>
        <div className="movieDetails">
            <div className="movieTitle">{dt.title}</div>
            <div className="rating">{dt.vote_average.toFixed(1)}/10</div>
        </div>
        <div className="description">{dt.overview}</div>
    </div>
    )}
   </div>
  )
}

export default Card