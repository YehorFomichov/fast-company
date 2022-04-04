import { createSlice } from '@reduxjs/toolkit'
import professionService from '../services/profession.service'

const professionSlice = createSlice({
  name: 'professions',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    professionsRequested: (state) => {
      state.isLoading = true
    },
    professionsLoaded: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    professionsRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { reducer: professionsReducer } = professionSlice
const { professionsRequested, professionsLoaded, professionsRequestFailed } =
  professionSlice.actions

export const loadProfessionsList = () => async (dispatch) => {
  dispatch(professionsRequested())
  try {
    const { content } = await professionService.get()
    dispatch(professionsLoaded(content))
  } catch (error) {
    dispatch(professionsRequestFailed(error.message))
  }
}
export const getProfessions = () => (state) => state.professions.entities
export const getProfessionsLoadingStatus = () => (state) =>
  state.professions.isLoading
export const getProfessionById = (id) => (state) => {
  if (state.professions.entities) {
    return state.professions.entities.find((item) => item._id === id)
  }
}
export default professionsReducer
