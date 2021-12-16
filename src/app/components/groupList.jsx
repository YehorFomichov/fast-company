import React from 'react'
import PropTypes from 'prop-types'

export const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) => {
  return (
    <div>
      <ul className='list-group'>
        {typeof items === 'object'
          ? Object.keys(items).map((item) => (
              <li
                className={
                  'list-group-item' +
                  (items[item] === selectedItem ? ' active' : '')
                }
                key={items[item][valueProperty]}
                onClick={() => onItemSelect(items[item])}
                role='button'
              >
                {items[item][contentProperty]}
              </li>
            ))
          : items.map((item, index) => (
              <li
                className={
                  'list-group-item' + (item === selectedItem ? ' active' : '')
                }
                key={items[index][valueProperty]}
                onClick={() => onItemSelect(items[index])}
                role='button'
              >
                {items[index][contentProperty]}
              </li>
            ))}
      </ul>
    </div>
  )
}
GroupList.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name'
}
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
}
