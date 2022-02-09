import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const MultiselectField = ({ options, onChange, name, label, defaultValue }) => {
  const handleChange = (value) => {
    onChange({ name: name, value: value })
  }
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          label: options[optionName].name,
          value: options[optionName]._id
        }))
      : options.map((option) => ({ name: option.name, value: option._id }))
  return (
    <div className='mb-4'>
      <label className='form-label'>{label}</label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        options={optionsArray}
        className='basic-multi-select'
        classNamePrefix='select'
        onChange={handleChange}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  )
}
MultiselectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.array,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
export default MultiselectField
