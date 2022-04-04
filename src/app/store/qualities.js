import { createSlice } from '@reduxjs/toolkit'
import qualityService from '../services/quality.service'
const qualitiesSlice = createSlice({
  name: 'qualities',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null
  },
  reducers: {
    qualiesRequested: (state) => {
      state.isLoading = true
    },
    qualitiesReceived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
      state.lastFetch = Date.now()
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

function isOutdated(date) {
  if (Date.now() - date > 10 * 60 * 1000) return true
  return false
}

export const loadQualitiesList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().qualities
  if (isOutdated(lastFetch)) {
    dispatch(qualiesRequested())
    try {
      const { content } = await qualityService.get()
      dispatch(qualitiesReceived(content))
    } catch (error) {
      dispatch(qualitiesRequestFailed(error.message))
    }
  }
}
export const getQualities = () => (state) => state.qualities.entities
export const getQualititesLoadingStatus = () => (state) =>
  state.qualities.isLoading
export const getQualitiesByIds = (id) => (state) => {
  if (state.qualities.entities) {
    return state.qualities.entities.find((item) => item._id === id)
  }
}
export default qualitiesReducer
