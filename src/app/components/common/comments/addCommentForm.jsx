import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SelectField from '../form/selectField'
import api from '../../../api'
import { validator } from '../../../utils/validator'
import TextAreaField from '../form/textAreaField'
const initialData = { userId: '', content: '' }

const AddCommentForm = ({ onSubmit }) => {
  const [data, setData] = useState(initialData)
  const [users, setUsers] = useState({})
  const [errors, setErrors] = useState({})
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const validatorConfig = {
    userId: {
      isRequired: {
        message: 'Please select a user'
      }
    },
    content: {
      isRequired: {
        message: 'The field must be fulfilled'
      }
    }
  }
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  useEffect(() => {
    api.users.fetchAll().then(setUsers)
  }, [])
  const clearForm = () => {
    setData(initialData)
    setErrors({})
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid = validate()
    if (!isValid) return
    onSubmit(data)
    clearForm()
  }
  const arrayOfUsers =
    users &&
    Object.keys(users).map((userId) => ({
      name: users[userId].name,
      value: users[userId]._id
    }))
  return (
    users && (
      <div className='card-body'>
        <div>
          <h2>New comment</h2>
          <form className='mb-4' onSubmit={handleSubmit}>
            <SelectField
              // label='Выбери пользователя:'
              onChange={handleChange}
              value={data.userId}
              options={arrayOfUsers}
              defaultOption='Choose a user...'
              name='userId'
              error={errors.userId}
            />
            <TextAreaField
              value={data.content}
              onChange={handleChange}
              name='content'
              label='message'
              error={errors.content}
            />
            <div className='d-flex justify-content-end'>
              <button className='btn btn-primary'>Опубликовать</button>
            </div>
          </form>
        </div>
      </div>
    )
  )
}
AddCommentForm.propTypes = {
  onSubmit: PropTypes.func
}
export default AddCommentForm
