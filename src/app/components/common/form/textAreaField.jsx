import React from 'react'
import PropTypes from 'prop-types'
const TextAreaField = ({ value, onChange, name, label, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-valid' : '')
  }
  return (
    <div className='mb-4'>
      <label htmlFor={name}> {label}</label>
      <div className='input-group has-validation'>
        <textarea
          className={getInputClasses()}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
        />
        {error && <div className='invalid feedback'>{error}</div>}
      </div>
    </div>
  )
}
TextAreaField.defaultProps = {
  type: 'text'
}
TextAreaField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string
}
export default TextAreaField
