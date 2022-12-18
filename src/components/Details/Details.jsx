import React, { useState, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Details() {
    const [data, setData] = useState({})
    const location = useLocation()
    const { id } = location.state

    useEffect( () => {fetchData()}, [] )
    async function fetchData(){
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=5147931f`)
        const data = await res.json()
        setData(data)
    }
    
  return (
    <section className='section movie-section'>
      <div className='container'>
        <div className='movie-details'>
          <img src={data.Poster} className='poster-img' alt={data.Title}/>
          <div className='movie-content'>
            <h2 className='sub-heading'> {data.Title} </h2>
            <p className='title'> <b>Rated:</b> {data.Rated}</p>
            <p className='title'> <b> Released: </b> {data.Released} </p>
            <p className='title'> <b> Actors: </b> {data.Actors} </p>
            <p className='title'> <b> Awards: </b> {data.Awards}  </p>
            <p className='title'> <b> Plot: </b> {data.Plot} </p>
            <Link to="/listOfMovies">
              <button className='btn'> Back to List </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
