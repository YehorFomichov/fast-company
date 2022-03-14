import React from 'react'
import PropTypes from 'prop-types'
import { useProfession } from '../../hooks/useProfession'
const Profession = ({ id }) => {
  const { isLoading, getProfession } = useProfession()
  const profession = getProfession(id)
  return <div key={id}>{!isLoading && profession.name}</div>
}
Profession.propTypes = {
  id: PropTypes.string
}
export default Profession
