import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='bg text-white'>
      <ul className='nav'>
        <li className='nav-item'>
          <Link className='nav-link' to='/fast-company'>
            Main
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/users'>
            Users
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
