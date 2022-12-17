import React from 'react'
import bg from '../../assets/hero.jpg'
import {BsSearch} from 'react-icons/bs'

export default function Hero() {

  let BgStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),url(${bg}) no-repeat center fixed`,
    backgroundSize: 'cover'
  }

  return (
    <section className='hero-section section' style={BgStyle}>
      <div>
        <form className='search-bar'>
          <input type='text' placeholder='Search...' />
          <button type='submit' className='btn search-btn'> <BsSearch size={20} /> </button>
        </form>
      </div>
    </section>
  )
}
