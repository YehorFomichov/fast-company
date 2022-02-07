import React, { useEffect, useState } from 'react'
import TextField from '../components/textField'
import { validator } from '../utils/validator'
const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const handleChange = ({ target }) => {
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
    }
  }
  useEffect(() => {
    validate()
  }, [data])
  const isValid = Object.keys(errors).length === 0
  const validate = () => {
    const errors = validator(data, validatorConfig)
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
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 shadow p-4'>
          <h3 className='mb-4'>Login</h3>
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
            <button
              type='submit'
              className='btn btn-primary w-100 mx-auto'
              disabled={!isValid}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
