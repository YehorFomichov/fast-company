import React from 'react'
import PropTypes from 'prop-types'

const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  error,
  name
}) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id
        }))
      : options.map((option) => ({ name: option.name, value: option._id }))

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  const getInputClasses = () => {
    return 'form-select' + (error ? ' is-invalid' : '')
  }
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      <select
        className={getInputClasses()}
        name={name}
        value={value}
        id={name}
        onChange={handleChange}
      >
        <option disabled value=''>
          {defaultOption}
        </option>
        {options &&
          optionsArray.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}
SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  name: PropTypes.string,
  defaultOption: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
export default SelectField
