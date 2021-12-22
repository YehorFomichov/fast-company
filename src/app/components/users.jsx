import React, { useState, useEffect } from 'react'
import { Pagination } from './pagination'
import paginate from '../utils/paginate'
import { GroupList } from './groupList'
import api from '../api'
import SearchStatus from './searchStatus'
import { UsersTable } from './usersTable'
import _ from 'lodash'

const Users = () => {
  const [professions, setProfessions] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({
    path: 'name',
    order: 'asc'
  })
  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])
  useEffect(() => {
    api.professions.fetchAll().then((data) => {
      setProfessions(data)
    })
  }, [])
  const pageSize = 8

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
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const handleSort = (item) => {
    setSortBy(item)
  }
  if (users) {
    const filteredUsers =
      selectedProf && selectedProf._id
        ? users.filter((user) => user.profession._id === selectedProf._id)
        : users
    const count = filteredUsers.length
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
    const userCrop = paginate(sortedUsers, currentPage, pageSize)
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
          <UsersTable
            users={userCrop}
            onDelete={handleDelete}
            currentSort={sortBy}
            onSort={handleSort}
            onToggleBookmark={toggleHandleBookmark}
          />
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
  return 'Loading...'
}

export default Users
