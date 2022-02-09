import React from 'react'
import PropTypes from 'prop-types'
const SearchStatus = ({ numberOfUsers }) => {
  const getCase = (number) => {
    const lastDigit = number % 10
    if (number === 1) {
      return `${number} человек тусанет с тобой сегодня`
    } else if (number >= 12 && number <= 12) {
      return `${number} человек тусанут с тобой сегодня`
    } else if (number > 1 && lastDigit >= 2 && lastDigit <= 4) {
      return `${number} человека тусанут с тобой сегодня`
    } else if (number === 0) {
      return 'Никто с тобой не тусанет :('
    } else return `${number} человек тусанут с тобой сегодня`
  }
  return (
    <div className='d-flex justify-content-center'>
      <span
        style={{
          textAlign: 'center',
          backgroundColor: '#e2e5eb',
          fontSize: '20px',
          borderRadius: '10px',
          fontWeight: 700,
          width: '80vw',
          color: 'black',
          boxShadow: '8px 8px 1px 1px rgba(0, 0, 0, 0.2)',
          marginBottom: '5px'
        }}
      >
        {getCase(numberOfUsers)}
      </span>
    </div>
  )
}
SearchStatus.propTypes = {
  numberOfUsers: PropTypes.number.isRequired,
  color: PropTypes.string
}
export default SearchStatus
