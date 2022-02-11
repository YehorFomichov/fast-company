import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const MultiselectField = ({ options, onChange, name, label, defaultValue }) => {
  const d = Object.keys(defaultValue).map((element) => ({
    label: defaultValue[element].name,
    value: defaultValue[element]._id
  }))
  const handleChange = (value) => {
    const returnArray = options.filter((option) => {
      return value.find((el) => {
        return el.value === option._id
      })
    })
    onChange({ name: name, value: returnArray })
  }
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          label: options[optionName].name,
          value: options[optionName]._id
        }))
      : options.map((option) => ({ label: option.name, value: option._id }))
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
        defaultValue={d}
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
