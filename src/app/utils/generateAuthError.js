function generateAuthError(message) {
  switch (message) {
    case 'INVALID_PASSWORD':
      return 'Password is incorrect'
    case 'EMAIL_NOT_FOUND':
      return 'Email not found'
    case 'EMAIL_EXISTS':
      return 'This email already exists'
    default:
      return 'Слишком много попыток входа, попробуйте позже'
  }
}
export default generateAuthError
