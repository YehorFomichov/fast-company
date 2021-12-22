import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from './bookmark'
import QuailitiesList from './qualitiesList'
import { Table } from './table'
export const UsersTable = ({
  users,
  onSort,
  currentSort,
  onToggleBookmark,
  onDelete
}) => {
  const columns = {
    name: { path: 'name', name: 'Имя' },
    qualities: {
      name: 'Качества',
      component: (user) => <QuailitiesList qualities={user.qualities} />
    },
    professions: {
      path: 'profession.name',
      name: 'Профессия'
    },
    completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
    rate: { path: 'rate', name: 'Оценка', filtered: false },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (
        <button onClick={() => onToggleBookmark(user._id)}>
          <Bookmark status={user.bookmark} />
        </button>
      )
    },
    delete: {
      component: (user) => (
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => onDelete(user._id)}
        >
          delete
        </button>
      )
    }
  }
  return (
    users.length !== 0 && (
      <Table
        onSort={onSort}
        currentSort={currentSort}
        columns={columns}
        data={users}
      />
    )
  )
}
UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  currentSort: PropTypes.object.isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}