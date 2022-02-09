import React, { useEffect, useState } from 'react'
import TextField from '../common/form/textField'
// import { validator } from '../../utils/validator'
import CheckboxField from '../common/form/checkboxField'
import * as yup from 'yup'
const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '', stayOn: false })
  const [errors, setErrors] = useState({})
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const validateScheme = yup.object().shape({
    password: yup
      .string()
      .required('Пароль обязателен для заполнения')
      .matches(
        /(?=.*[A-Z])/,
        'Пароль должен содержать как минимум одну заглавную букву'
      )
      .matches(/(?=.*[0-9])/, 'Пароль должен содержать как минимум одино число')
      .matches(
        /(?=.*[!@#$%^&*])/,
        'Пароль должен содержать один из символов: !@#$%^&*'
      )
      .matches(/(?=.{8,})/, 'Пароль должен быть больше 8 символов'),
    email: yup
      .string()
      .required('Электронная почта обязательна для заполнения')
      .email('Email введен некорректно')
  })

  // const validatorConfig = {
  //   email: {
  //     isRequired: { message: 'Электронная почта обязательна для заполнения' },
  //     isEmail: { message: 'Email введен некорректно' }
  //   },
  //   password: {
  //     isRequired: { message: 'Пароль обязателен для заполнения' },
  //     isCapital: {
  //       message: 'Пароль должен содержать как минимум одну заглавную букву'
  //     },
  //     isContainDigits: {
  //       message: 'Пароль должен содержать как минимум один символ'
  //     },
  //     min: {
  //       message: 'Пароль должен быть больше 8 символов',
  //       value: 8
  //     }
  //   }
  // }
  useEffect(() => {
    validate()
  }, [data])
  const isValid = Object.keys(errors).length === 0
  const validate = () => {
    // const errors = validator(data, validatorConfig)
    validateScheme
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }))
    // setErrors(errors)
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
      <CheckboxField onChange={handleChange} value={data.stayOn} name='stayOn'>
        Оставатся в системе?
      </CheckboxField>
      <button
        type='submit'
        className='btn btn-primary w-100 mx-auto'
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  )
}

export default LoginForm
