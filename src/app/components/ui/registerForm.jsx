import React, { useEffect, useState } from 'react'
import TextField from '../common/form/textField'
import { validator } from '../../utils/validator'
import api from '../../api'
import SelectField from '../common/form/selectField'
import RadioField from '../common/form/radioField'
import MultiselectField from '../common/form/multiselectField'
import CheckboxField from '../common/form/checkboxField'

const RegisterForm = () => {
  const [qualities, setQualities] = useState({})
  const [data, setData] = useState({
    email: '',
    password: '',
    profession: '',
    sex: 'male',
    qualities: [],
    licence: false
  })
  const [errors, setErrors] = useState({})
  const [professions, setProfessions] = useState()

  useEffect(() => {
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

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Email введен некорректно' }
    },
    password: {
      isRequired: { message: 'Пароль обязателен для заполнения' },
      isCapital: {
        message: 'Пароль должен содержать как минимум одну заглавную букву'
      },
      isContainDigits: {
        message: 'Пароль должен содержать как минимум один символ'
      },
      min: {
        message: 'Пароль должен быть больше 8 символов',
        value: 8
      }
    },
    profession: {
      isRequired: { message: 'Пожалуйста, выберите профессию' }
    },
    licence: {
      isRequired: {
        message:
          'Вы не можете использовать наш сервис без подтвержения лицензионного соглашения'
      }
    }
  }
  useEffect(() => {
    validate()
  }, [data])
  const isValid = Object.keys(errors).length === 0
  const validate = () => {
    const errors = validator(data, validatorConfig)
    console.log(data)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid = validate()
    if (!isValid) {
      return
    }
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Электронная почта:'
          name='email'
          onChange={handleChange}
          value={data.email}
          error={errors.email}
        ></TextField>
        <TextField
          label='Пароль:'
          type='password'
          name='password'
          onChange={handleChange}
          value={data.password}
          error={errors.password}
        ></TextField>
        {professions && (
          <SelectField
            label='Профессия:'
            onChange={handleChange}
            value={data.profession}
            error={errors.profession}
            options={professions}
            defaultOption='Choose...'
            name='profession'
          />
        )}
        <RadioField
          label='Укажите пол:'
          onChange={handleChange}
          value={data.sex}
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
          defaultValue={data.qualities}
          name='qualities'
          label='Выберите ваши качества:'
        />
        <CheckboxField
          onChange={handleChange}
          value={data.licence}
          name='licence'
          error={errors.licence}
        >
          Подтвердить <a>лицензионное соглашение?</a>
        </CheckboxField>
        <button
          type='submit'
          className='btn btn-primary w-100 mx-auto'
          disabled={!isValid}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
