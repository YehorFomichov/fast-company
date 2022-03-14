import React from 'react'
import PropTypes from 'prop-types'
import { useQualities } from '../../../hooks/useQualities'
import Quality from './quality'

const QualitiesList = ({ qualities }) => {
  const { isLoading, getUserQuality } = useQualities()
  return (
    <>
      {!isLoading &&
        qualities.map((qual) => {
          const quality = getUserQuality(qual)
          return (
            <Quality
              key={quality._id}
              color={quality.color}
              name={quality.name}
              _id={quality._id}
            />
          )
        })}
    </>
  )
}

QualitiesList.propTypes = {
  qualities: PropTypes.array
}

export default QualitiesList
