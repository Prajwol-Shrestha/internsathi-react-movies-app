import React from 'react'

export default function Header() {
  return (
    <header>
        <nav className='navbar container'>
          <div className='logo'> Logo </div>
          <ul className='nav-links'>
            <li className="nav-link"> Home </li>
            <li className="nav-link"> About </li>
            <li className="nav-link"> contact </li>
          </ul>
        </nav>
      </header>
  )
}
