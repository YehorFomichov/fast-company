import React from 'react'
import useMockData from '../utils/mockData'

const Main = () => {
  const { error, initialize, progress, status } = useMockData()
  const handleClick = () => {
    initialize()
  }
  return (
    <div className='container mt-5'>
      <h1> Main Page</h1>
      <h3>Initialise date to firebase</h3>
      <ul>
        <li>Status: {status}</li>
        <li>Progress: {progress}%</li>
        {error ? <li>{error}</li> : null}
      </ul>
      <button className='btn btn-primary' onClick={handleClick}>
        Init Button
      </button>
    </div>
  )
}

export default Main
