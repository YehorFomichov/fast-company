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
          <Link className='nav-link' to='/fast-company/login'>
            Login
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/fast-company/users'>
            Users
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
