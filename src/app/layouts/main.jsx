import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/ui/footer'
const URL =
  'https://unsplash.com/photos/1ZvFTjgEodk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDl8fG1lZXRpbmclMjBjb3VwbGV8ZW58MHx8fHwxNjQ4NDk2OTY2&force=true&w=1920'
const Main = () => {
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
          <h1 className='position-absolute m-3 text-light'>Main Page</h1>
          <h3 className='position-absolute m-3 pt-5 text-light'>
            Please{' '}
            <Link to='/login' className='text-light'>
              Register
            </Link>{' '}
            to continue
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
