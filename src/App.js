import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice';
import axios from 'axios';
import { useEffect } from 'react';
import Detail from './components/DetailsPage/Detail';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    fetchDataFromApi();
  })

const BASE_URL = "https://api.themoviedb.org/3/movie/upcoming";
const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

const headers = {
    Authorization:"bearer " + TMDB_TOKEN,
};


const fetchDataFromApi = async() => {
    try{
        const {data} = await axios.get(BASE_URL, {
            headers
        })
        dispatch(getApiConfiguration(data.results));
        return data;
    } catch(err){
        console.log(err)
        return err;
    }
}


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path="/details/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
