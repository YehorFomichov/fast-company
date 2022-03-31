import { createSlice } from '@reduxjs/toolkit'
import qualityService from '../services/quality.service'
const qualitiesSlice = createSlice({
  name: 'qualities',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    qualiesRequested: (state) => {
      state.isLoading = true
    },
    qualitiesReceived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    qualitiesRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { reducer: qualitiesReducer } = qualitiesSlice
const { qualiesRequested, qualitiesReceived, qualitiesRequestFailed } =
  qualitiesSlice.actions

export const loadQualitiesList = () => async (dispatch) => {
  dispatch(qualiesRequested())
  try {
    const { content } = await qualityService.get()
    dispatch(qualitiesReceived(content))
  } catch (error) {
    dispatch(qualitiesRequestFailed(error.message))
  }
}
export const getQualities = () => (state) => state.qualities.entities
export const getQualititesLoadingStatus = () => (state) =>
  state.qualities.isLoading
export const getUserQuality = (id) => (state) =>
  state.qualities.entities.find((item) => item._id === id)
export default qualitiesReducer
