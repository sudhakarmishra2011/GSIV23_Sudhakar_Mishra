import {React,useEffect, useState} from 'react'
import './style.css'
import Card from '../Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import updateState, { getApiConfiguration } from '../../store/homeSlice'
import arrow_forward from '../../assets/arrow_forward.png'
import arro_back from '../..//assets/arrow_back.png'

const Home = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.home)

  const upcoming = "https://api.themoviedb.org/3/movie/upcoming"
  const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;
  const headers = {
    Authorization:"bearer " + TMDB_TOKEN,
};

const [page,setPage] = useState(2)

const fetchNextPageData = async(val) => {
  val == "+" ? setPage(page + 1) : setPage(page - 1)
  
  try{
      const {data} = await axios.get(upcoming, {
          headers,
          params:{
            page : page,
          }
      })
      dispatch(getApiConfiguration(data.results));
      return data;
  } catch(err){
      console.log(err)
      return err;
  }
}

  return (<>
    <div className="HomeContainer">
        <Card data={data}/>
    </div>
    <div className="footer">
    <div className="previousPage" onClick={(e) => fetchNextPageData("-")}>
        <img src={arro_back} alt="previousPage" />
        </div>
        <div className="arrowNextPage" onClick={(e) => fetchNextPageData("+")}>
          <img src={arrow_forward} alt="nextPage" />
        </div>
        
    </div>
    </>
  )
}

export default Home