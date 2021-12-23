import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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
  const renderPhrase = (number) => {
    return number > 0 ? (
      <Phrase color={'black'}>{getCase(number)}</Phrase>
    ) : (
      <Phrase color={'#9f2626'}>{getCase(number)}</Phrase>
    )
  }
  const Phrase = styled.span`
    text-align: center;
    background-color: #e2e5eb;
    font-size: 24px;
    border-radius: 10px;
    font-weight: 700;
    width: 80vw;
    color: ${(props) => props.color};
    box-shadow: 8px 8px 1px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 5px;
  `
  return (
    <div className='d-flex justify-content-center'>
      {renderPhrase(numberOfUsers)}
    </div>
  )
}
SearchStatus.propTypes = {
  numberOfUsers: PropTypes.number.isRequired,
  color: PropTypes.string
}
export default SearchStatus
