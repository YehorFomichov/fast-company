import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useAuth } from './useAuth'
import { nanoid } from 'nanoid'
import commentService from '../services/comment.service'
import { toast } from 'react-toastify'

const CommentsContext = React.createContext()

export const useComments = () => {
  return useContext(CommentsContext)
}

const CommentsProvider = ({ children }) => {
  const { userId } = useParams()
  const { currentUser } = useAuth()
  const [isLoading, setLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    getComments()
  }, [userId])
  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])
  async function getComments() {
    try {
      const { content } = await commentService.getComments(userId)
      setComments(content)
    } catch (error) {
      errorCatcher(error)
    } finally {
      setLoading(false)
    }
  }
  async function removeComment(id) {
    try {
      const { content } = await commentService.removeComment(id)
      if (content === null) {
        setComments((prevState) => prevState.filter((com) => com.id !== id))
      }
    } catch (error) {
      errorCatcher(error)
    }
  }
  function errorCatcher(error) {
    const { message } = error.response.data
    setError(message)
    setLoading(false)
  }
  async function createComment(data) {
    const comment = {
      _id: nanoid(),
      ...data,
      pageId: userId,
      created_at: Date.now(),
      userId: currentUser._id
    }
    try {
      const { content } = await commentService.createComment(comment)
      setComments((prevState) => [...prevState, content])
    } catch (error) {
      errorCatcher(error)
    }
  }
  return (
    <CommentsContext.Provider
      value={{ isLoading, createComment, comments, removeComment }}
    >
      {children}
    </CommentsContext.Provider>
  )
}
CommentsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default CommentsProvider
