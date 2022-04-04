import { createAction, createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import commentService from '../services/comment.service'
const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    commentsRequested: (state) => {
      state.isLoading = true
    },
    commentsReceived: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    commentsRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    commentDeleted: (state, action) => {
      state.entities = state.entities.filter(
        (com) => com._id !== action.payload
      )
    },
    commentAdded: (state, action) => {
      state.entities.push(action.payload)
    },
    commentRemoveFailed: (state, action) => {
      state.error = action.payload
    },
    commentAddFailed: (state, action) => {
      state.error = action.payload
    }
  }
})

const { reducer: commentsReducer } = commentsSlice
const {
  commentsRequested,
  commentsReceived,
  commentsRequestFailed,
  commentDeleted,
  commentAdded,
  commentRemoveFailed,
  commentAddFailed
} = commentsSlice.actions

const commentAddRequest = createAction('comments/commentAddRequest')
const commentRemoveRequest = createAction('comments/commentRemoveRequest')
export const loadCommentsList = (userId) => async (dispatch) => {
  dispatch(commentsRequested())
  try {
    const { content } = await commentService.getComments(userId)
    dispatch(commentsReceived(content))
  } catch (error) {
    dispatch(commentsRequestFailed(error.message))
  }
}
export const removeComment = (id) => async (dispatch) => {
  dispatch(commentRemoveRequest())
  try {
    const { content } = await commentService.removeComment(id)
    if (content === null) {
      dispatch(commentDeleted(id))
    }
  } catch (error) {
    dispatch(commentRemoveFailed(error.message))
  }
}
export const addComment =
  ({ content, currentUserId, userId }) =>
  async (dispatch) => {
    dispatch(commentAddRequest())
    const comment = {
      _id: nanoid(),
      content: content,
      pageId: userId,
      created_at: Date.now(),
      userId: currentUserId
    }
    try {
      const { content } = await commentService.createComment(comment)
      dispatch(commentAdded(content))
    } catch (error) {
      dispatch(commentAddFailed(error))
    }
  }
export const getComments = () => (state) => state.comments.entities
export const getCommentsLoadingStatus = () => (state) =>
  state.comments.isLoading

export default commentsReducer
