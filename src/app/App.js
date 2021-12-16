import React, { useState } from 'react'
import api from './api'

import Users from './components/users'

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => userId !== user._id))
  }
  const toggleHandleBookmark = (userId) => {
    setUsers((prevState) =>
      prevState.map((user) => {
        if (userId === user._id) {
          user.bookmark = !user.bookmark
        }
        return user
      })
    )
  }
  return (
    <>
      <Users
        users={users}
        onDelete={handleDelete}
        onFavorite={toggleHandleBookmark}
      />
    </>
  )
}
export default App
