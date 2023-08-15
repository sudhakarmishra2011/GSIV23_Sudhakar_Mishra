import React from 'react'
import './style.css'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'

const Home = () => {

  const { data } = useSelector((state) => state.home)

  return (
    <div className="HomeContainer">
        <Card data={data}/>
    </div>
  )
}

export default Home