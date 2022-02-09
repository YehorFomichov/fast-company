import React, { useState, useEffect } from 'react'
import Pagination from '../../common/pagination'
import paginate from '../../../utils/paginate'
import GroupList from '../../common/groupList'
import api from '../../../api'
import SearchStatus from '../../ui/searchStatus'
import UsersTable from '../../ui/usersTable'
import _ from 'lodash'
import { useParams } from 'react-router-dom'
import UserPage from '../userPage'
import TextField from '../../common/form/textField'

const UsersListPage = () => {
  const { userId } = useParams()
  const [users, setUsers] = useState()
  const [professions, setProfessions] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProf, setSelectedProf] = useState()
  const [searchByName, setSearchByName] = useState('')
  const [sortBy, setSortBy] = useState({
    path: 'name',
    order: 'asc'
  })
  const pageSize = 10

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
    setSearchByName('')
  }
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const handleSortByProfession = (item) => {
    setSortBy(item)
  }
  const handleSortByName = (target) => {
    setSearchByName(target.value)
    setSelectedProf('')
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])
  useEffect(() => {
    api.professions.fetchAll().then((data) => {
      setProfessions(data)
    })
  }, [])

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

  if (userId) {
    return <UserPage userId={userId} onToggleBookmark={toggleHandleBookmark} />
  } else if (users && !userId) {
    const filteredUsers =
      selectedProf && selectedProf._id
        ? users.filter((user) => user.profession._id === selectedProf._id)
        : users.filter((user) =>
            user.name.toLowerCase().includes(searchByName.toLocaleLowerCase())
          )
    const count = filteredUsers.length
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
    const userCrop = paginate(sortedUsers, currentPage, pageSize)
    const clearFilter = () => {
      setSelectedProf(undefined)
    }
    return (
      <div
        className='d-flex table-sm'
        style={{
          paddingTop: '7vh',
          height: '100vh',
          backgroundPosition: 'center'
        }}
      >
        {professions && (
          <div className='d-flex flex-column flex-shrink-0 p-3'>
            <GroupList
              items={professions}
              onItemSelect={handleProfessionSelect}
              selectedItem={selectedProf}
            />
            <button className='btn btn-secondary mt-2' onClick={clearFilter}>
              Очистить
            </button>
          </div>
        )}
        <div className='d-flex flex-column'>
          <SearchStatus numberOfUsers={count} />
          <form>
            <TextField
              label='Поиск'
              name='search'
              value={searchByName}
              error=''
              onChange={handleSortByName}
            />
          </form>
          <UsersTable
            users={userCrop}
            onDelete={handleDelete}
            currentSort={sortBy}
            onSort={handleSortByProfession}
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

export default UsersListPage
