import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Quality from './quality'
import { useDispatch, useSelector } from 'react-redux'
import {
  getQualititesLoadingStatus,
  loadQualitiesList
} from '../../../store/qualities'

const QualitiesList = ({ qualities }) => {
  const isLoading = useSelector(getQualititesLoadingStatus())
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadQualitiesList())
  }, [])
  return (
    <>
      {!isLoading &&
        qualities.map((qual) => {
          return <Quality key={qual} qual={qual} />
        })}
    </>
  )
}

QualitiesList.propTypes = {
  qualities: PropTypes.array
}

export default QualitiesList
