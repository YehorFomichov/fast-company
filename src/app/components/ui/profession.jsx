import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
  getProfession,
  getProfessionsLoadingStatus
} from '../../store/professions'
const Profession = ({ id }) => {
  const professionsLoading = useSelector(getProfessionsLoadingStatus())
  const profession = useSelector(getProfession(id))
  return <div key={id}>{!professionsLoading && profession.name}</div>
}
Profession.propTypes = {
  id: PropTypes.string
}
export default Profession
