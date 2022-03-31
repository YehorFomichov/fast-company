import React from 'react'
import PropTypes from 'prop-types'
import Quality from './quality'
import { useSelector } from 'react-redux'
import {
  getQualititesLoadingStatus,
  getUserQuality
} from '../../../store/qualities'

const QualitiesList = ({ qualities }) => {
  const isLoading = useSelector(getQualititesLoadingStatus())
  return (
    <>
      {!isLoading &&
        qualities.map((qual) => {
          const quality = useSelector(getUserQuality(qual))
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
