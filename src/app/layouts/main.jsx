import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../components/ui/footer'
import { getIsLoggedIn } from '../store/users'
const URL =
  'https://unsplash.com/photos/pb_lF8VWaPU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NTZ8fHNvY2lhbCUyMG1lZGlhfGVufDB8fHx8MTY0OTc3NTIwOA&force=true&w=1920'
const Main = () => {
  const isLoggedIn = useSelector(getIsLoggedIn())
  return (
    <div className='container-fluid'>
      <div className='container-fluid'>
        <div className='container-fluid d-flex flex-column'>
          <div
            style={{
              minHeight: '600px',
              backgroundImage: `url('${URL}')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          ></div>
          {!isLoggedIn && (
            <>
              <h1 className='position-absolute m-3 text-light'>Main Page</h1>
              <h3 className='position-absolute m-3 pt-5 text-light'>
                Please{' '}
                <Link to='/login' className='text-light'>
                  Login
                </Link>{' '}
                to continue
              </h3>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
