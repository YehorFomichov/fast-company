import React from 'react'
import Quaility from './quality'
import Bookmark from './bookmark'
import PropTypes from 'prop-types'

const User = ({ user, onFavorite, onDelete }) => {
  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        <Quaility qualities={user.qualities} />
      </td>
      <td key={user.profession._id}>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <button onClick={() => onFavorite(user._id)}>
          <Bookmark status={user.bookmark} />
        </button>
      </td>
      <td>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => onDelete(user._id)}
        >
          delete
        </button>
      </td>
    </tr>
  )
}
User.propTypes = {
  user: PropTypes.object.isRequired,
  onFavorite: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
export default User
