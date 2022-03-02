import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../../../api'
import Comment from './comment'
const Comments = ({ userId }) => {
  const [comments, setComments] = useState()
  const [users, setUsers] = useState()
  useEffect(() => {
    api.comments.fetchCommentsForUser(userId).then((data) => {
      setComments(data)
    })
    api.users.fetchAll().then((data) => {
      setUsers(data)
    })
  }, [])
  const filterUser = (id) => {
    return users.find((user) => user._id === id)
  }
  return (
    <>
      {comments && users ? (
        <>
          {comments.map((comment) => (
            <Comment
              key={comment._id}
              commentedUser={filterUser(comment.userId)}
              commentContent={comment.content}
              publishingTime={comment.created_at}
            />
          ))}
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  )
}

Comments.propTypes = {
  userId: PropTypes.string
}
export default Comments
