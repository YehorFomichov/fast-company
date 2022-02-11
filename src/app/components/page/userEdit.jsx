import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api'
import TextField from '../common/form/textField'
import SelectField from '../common/form/selectField'
import MultiselectField from '../common/form/multiselectField'
import RadioField from '../common/form/radioField'

const UserEdit = () => {
  const { userId } = useParams()
  const [user, setUser] = useState()
  const [qualities, setQualities] = useState({})
  const [professions, setProfessions] = useState()
  const handleChange = (target) => {
    setUser((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    api.users.update(userId, user)
  }
  useEffect(() => {
    api.users.getById(userId).then((data) => {
      setUser(data)
    })
    api.professions.fetchAll().then((data) => {
      const updatedProfessions = Object.keys(data).map((profession) => ({
        name: data[profession].name,
        _id: data[profession]._id
      }))
      setProfessions(updatedProfessions)
    })
    api.qualities.fetchAll().then((data) => {
      const updatedQualities = Object.keys(data).map((quality) => ({
        _id: data[quality]._id,
        name: data[quality].name,
        color: data[quality].color
      }))
      setQualities(updatedQualities)
    })
  }, [])
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='shadow p-4'>
          {user && professions && (
            <form onSubmit={handleSubmit}>
              <TextField
                label='Имя:'
                name='name'
                onChange={handleChange}
                value={user.name}
              ></TextField>
              <TextField
                label='Электронная почта:'
                type='email'
                name='email'
                onChange={handleChange}
                value={user.email}
              ></TextField>
              <SelectField
                label='Выбери свою профессию:'
                onChange={handleChange}
                value={user.profession}
                options={professions}
                defaultOption='Choose...'
                name='profession'
              />
              <RadioField
                label='Укажите пол:'
                onChange={handleChange}
                value={user.sex}
                name='sex'
                options={[
                  { name: 'Male', value: 'male' },
                  { name: 'Female', value: 'female' },
                  { name: 'Other', value: 'other' }
                ]}
              />
              <MultiselectField
                onChange={handleChange}
                options={qualities}
                defaultValue={user.qualities}
                name='qualities'
                label='Выберите ваши качества:'
              />
              <button type='submit' className='btn btn-primary w-100 mx-auto'>
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserEdit
