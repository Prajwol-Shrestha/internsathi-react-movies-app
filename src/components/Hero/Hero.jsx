import React, {useCallback, useState} from 'react'
import bg from '../../assets/hero.jpg'
import {BsSearch} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function Hero({query, setQuery}) {
  const navigate = useNavigate();
  const handleClick = useCallback( () => navigate('/listOfMovies', {replace: true}), [navigate] )

  let BgStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),url(${bg}) no-repeat center fixed`,
    backgroundSize: 'cover'
  }



  return (
    <section className='hero-section section' style={BgStyle}>
      <div>
        <h1 className='heading'> Search your movie by title </h1>
        <form className='search-bar'>
          <input type='text' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type='submit' className='btn search-btn' onClick={handleClick} > <BsSearch size={20} /> </button>
        </form>
      </div>
    </section>
  )
}
