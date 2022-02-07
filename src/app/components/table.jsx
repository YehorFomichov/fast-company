import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

export const Table = ({ onSort, currentSort, columns, data, children }) => {
  return (
    <table
      className='table table-hover'
      style={{
        width: '80vw',
        backgroundColor: 'white',
        borderRadius: '10px 10px 0 0',
        boxShadow: '8px 8px 1px 1px rgba(0, 0, 0, .2)'
      }}
    >
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
