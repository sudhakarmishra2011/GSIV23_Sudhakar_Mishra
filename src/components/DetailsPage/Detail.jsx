import React, { useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
    const { data } = useSelector((state) => state.home)
    const params = useParams();
    console.log(data)
    let url = "https://image.tmdb.org/t/p/original";

    let selectedMovie = data && data.map && data.filter((item) => {
        if (item.id == params.id)
            return item;
        else
            return null;
    })

    return (
        <div className="detailPageContainer">
            {data && data.map && <div className="movieCard">
                <div className="moviePoster">
                    <img src={url + selectedMovie[0].poster_path} height={300} alt='img' />
                </div>
                <div className="movieDetailsRight">
                    <div className="titleRating">
                        <div className="movieName">{selectedMovie[0]?.title || ''}</div>
                        <div className="movieRating">({selectedMovie[0].vote_average.toFixed(1) || ''})</div>
                    </div>
                    <div className="yearLengthDirector">
                        {selectedMovie[0].release_date.substring(0, 4)}
                    </div>
                    <div className="movieDescription">
                        Description : {selectedMovie[0].overview || ''}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Detail