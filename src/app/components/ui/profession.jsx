import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
  getProfessionsLoadingStatus,
  getProfessionById
} from '../../store/professions'
const Profession = ({ id }) => {
  const professionsLoading = useSelector(getProfessionsLoadingStatus())
  const profession = useSelector(getProfessionById(id))
  return <div key={id}>{!professionsLoading && profession.name}</div>
}
Profession.propTypes = {
  id: PropTypes.string
}
export default Profession
