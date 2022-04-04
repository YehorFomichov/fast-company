import React from 'react'
import PropTypes from 'prop-types'
import { getQualitiesByIds } from '../../../store/qualities'
import { useSelector } from 'react-redux'

const Quality = ({ qual }) => {
  const quality = useSelector(getQualitiesByIds(qual))
  return (
    <span className={'badge m-1 bg-' + quality.color} key={quality._id}>
      {quality.name}
    </span>
  )
}
Quality.propTypes = {
  qual: PropTypes.string
}

export default Quality
