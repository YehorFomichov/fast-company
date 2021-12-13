import React, { useState } from 'react'
import { Pagination } from './pagination'
import User from './user'
import paginate from '../utils/paginate'
import PropTypes from 'prop-types'

const Users = ({ users, onDelete, onFavorite }) => {
  const count = users.length
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const userCrop = paginate(users, currentPage, pageSize)
  const renderHeader = () => {
    return (
      users.length !== 0 && (
        <tr>
          <th scope='col'>Имя</th>
          <th scope='col'>Качества</th>
          <th scope='col'>Профессия</th>
          <th scope='col'>Встретился, раз</th>
          <th scope='col'>Оценка</th>
          <th scope='col'>Избранное</th>
        </tr>
      )
    )
  }
  return (
    <>
      <table className='table'>
        <thead>{renderHeader()}</thead>
        <tbody>
          {users.length !== 0 &&
            userCrop.map((user) => (
              <User
                user={user}
                onFavorite={onFavorite}
                onDelete={onDelete}
                key={user._id}
              />
            ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}
Users.propTypes = {
  users: PropTypes.array.isRequired,
  onFavorite: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Users
