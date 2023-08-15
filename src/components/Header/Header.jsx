import React, { useState } from 'react'
import './style.css'
import homeIcon from '../../assets/home.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useSelector,useDispatch } from 'react-redux'
import { getApiConfiguration } from '../../store/homeSlice';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

let [query,setQuery] = useState('')
console.log(query.length)

  const BASE_URL = "https://api.themoviedb.org/3/search/movie";
  const upcoming = "https://api.themoviedb.org/3/movie/upcoming"
  const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
  
  const headers = {
      Authorization:"bearer " + TMDB_TOKEN,
  };
  
  const searchQueryHandler = async(event) => {
    if (event.key === "Enter" && query.length > 0) {
      searchApi();
    }
    else if(query.length === 0){
      try{
        const {data} = await axios.get(upcoming, {
            headers
        })
        dispatch(getApiConfiguration(data.results));
        return data;
    } catch(err){
        console.log(err)
        return err;
    }
    }
  };
  
  const searchApi = async() => {
      try{
          const {data} = await axios.get(BASE_URL, {
              headers,
              params:{
                query : query,
              }
          })
          dispatch(getApiConfiguration(data.results));
          return data;
      } catch(err){
          console.log(err)
          return err;
      }
  }


  return (
    <div className='headerContainer'>
      <div className="searchContainer">
        <input type='text' className="icon" placeholder='Search' onChange={(e)=> setQuery(e.target.value)} onKeyUp={searchQueryHandler}/>
      </div>
      <div className="homeIconContainer" onClick={() => navigate("/")}>
        <img src={homeIcon} alt='homeIcon' className='homeIcon'/>
      </div>
    </div>
  )
}

export default Header