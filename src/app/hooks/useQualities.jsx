import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import qualityService from '../services/quality.service'
import PropTypes from 'prop-types'
const QualitiesContext = React.createContext()
export const useQualities = () => {
  return useContext(QualitiesContext)
}

const QualitiesProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true)
  const [qualities, setQualities] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    getAllQualities()
  }, [])
  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])
  async function getAllQualities() {
    try {
      const { content } = await qualityService.get()
      setQualities(content)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }
  function errorCatcher(error) {
    const { message } = error.response.data
    setError(message)
    setLoading(false)
  }
  function getUserQuality(id) {
    return qualities.find((item) => item._id === id)
  }
  return (
    <QualitiesContext.Provider value={{ isLoading, qualities, getUserQuality }}>
      {children}
    </QualitiesContext.Provider>
  )
}
QualitiesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default QualitiesProvider
