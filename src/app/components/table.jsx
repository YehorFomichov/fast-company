import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

export const Table = ({ onSort, currentSort, columns, data, children }) => {
  return (
    <table className='table'>
      {children || (
        <>
          <TableHeader {...{ onSort, currentSort, columns }} />
          <TableBody {...{ columns, data }} />
        </>
      )}
    </table>
  )
}
Table.propTypes = {
  onSort: PropTypes.func,
  currentSort: PropTypes.object,
  columns: PropTypes.object,
  data: PropTypes.array,
  children: PropTypes.array
}
export default Table
