import React, { useState, useEffect } from 'react'
import { Pagination } from './pagination'
import User from './user'
import paginate from '../utils/paginate'
import PropTypes from 'prop-types'
import { GroupList } from './groupList'
import api from '../api'
import SearchStatus from './searchStatus'

const Users = ({ users: allUsers, onDelete, onFavorite }) => {
  const [professions, setProfessions] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProf, setSelectedProf] = useState()

  const handleProfessionSelect = (item) => {
    console.log(item)
    setSelectedProf(item)
  }
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])
  useEffect(() => {
    api.professions.fetchAll().then((data) => {
      setProfessions(data)
    })
    console.log('render')
  }, [])

  const pageSize = 2
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const filteredUsers =
    selectedProf && selectedProf._id
      ? allUsers.filter((user) => user.profession === selectedProf)
      : allUsers
  const count = filteredUsers.length
  const userCrop = paginate(filteredUsers, currentPage, pageSize)
  const renderHeader = () => {
    return (
      allUsers.length !== 0 && (
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
  const clearFilter = () => {
    setSelectedProf(undefined)
  }

  return (
    <div className='d-flex'>
      {professions && (
        <div className='d-flex flex-column flex-shrink-0 p-3'>
          <GroupList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
          />
          <button className='btn btn-secondary mt-2' onClick={clearFilter}>
            {' '}
            Очистить
          </button>
        </div>
      )}
      <div className='d-flex flex-column'>
        <SearchStatus numberOfUsers={count} />
        <table className='table'>
          <thead>{renderHeader()}</thead>
          <tbody>
            {allUsers.length !== 0 &&
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
        <div className='d-flex-justify-content-center'>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}
Users.propTypes = {
  users: PropTypes.array.isRequired,
  onFavorite: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Users
