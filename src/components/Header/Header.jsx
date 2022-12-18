import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <nav className='navbar container'>
          <Link to="/">
            <div className='logo'> Movie App </div>
          </Link>
          <ul className='nav-links'>
            <Link to="/">
              <li className="nav-link"> Home </li>
            </Link>
          </ul>
        </nav>
      </header>
  )
}
