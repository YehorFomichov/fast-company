export function validator(data, config) {
  const errors = {}
  function validate(validate, data, config) {
    let statusValidate
    switch (validate) {
      case 'isRequired':
        statusValidate = data.trim() === ''
        break
      case 'isEmail': {
        const emailRegExp = /^\S+@\S+\.\S+$/g
        statusValidate = !emailRegExp.test(data)
        break
      }
      case 'isCapital': {
        const capitalRegExp = /[A-Z]+/g
        statusValidate = !capitalRegExp.test(data)
        break
      }
      case 'isContainDigits': {
        const digitsRegExp = /\d+/g
        statusValidate = !digitsRegExp.test(data)
        break
      }
      case 'min': {
        statusValidate = data.length < config.value
        break
      }
      default:
        break
    }
    if (statusValidate) return config.message
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )

      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  console.log(errors)
  return errors
}
