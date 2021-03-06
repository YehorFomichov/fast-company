import axios from 'axios'
import localStorageService from './localStorage.service'

const httpAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY
  }
})

const authService = {
  register: async ({ email, password }) => {
    const url = 'accounts:signUp'
    const { data } = await httpAuth.post(url, {
      email,
      password,
      returnSecureToken: true
    })
    return data
  },
  logIn: async ({ email, password }) => {
    const url = 'accounts:signInWithPassword'
    const { data } = await httpAuth.post(url, {
      email,
      password,
      returnSecureToken: true
    })
    return data
  },
  refresh: async () => {
    const { data } = await httpAuth.post('token', {
      grant_type: 'refresh_token',
      refresh_token: localStorageService.getRefreshToken()
    })
    return data
  }
}

export default authService
