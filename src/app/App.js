import React, { useState, useEffect } from 'react'
import api from './api'
import Users from './components/users'

const App = () => {
  const [users, setUsers] = useState()
  useEffect(() => {
    api.users.fetchAll().then((data) => {
      setUsers(data)
    })
  }, [])
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
      {users && (
        <Users
          users={users}
          onDelete={handleDelete}
          onFavorite={toggleHandleBookmark}
        />
      )}
    </>
  )
}
export default App
