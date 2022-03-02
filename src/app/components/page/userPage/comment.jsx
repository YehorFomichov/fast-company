import React from 'react'
import PropTypes from 'prop-types'
import dateConvert from '../../../utils/dateConvert'
import { Link } from 'react-router-dom'
const Comment = ({ commentedUser, commentContent, publishingTime }) => {
  console.log(commentedUser._id)
  return (
    <div className='bg-light card-body  mb-3'>
      <div className='row'>
        <div className='col'>
          <div className='d-flex flex-start '>
            <img
              src={`https://avatars.dicebear.com/api/avataaars/${(
                Math.random() + 1
              )
                .toString(36)
                .substring(7)}.svg`}
              className='rounded-circle shadow-1-strong me-3'
              alt='avatar'
              width='65'
              height='65'
            />
            <div className='flex-grow-1 flex-shrink-1'>
              <div className='mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='mb-1 '>
                    <Link to={'/users/' + commentedUser._id}>
                      {commentedUser.name}
                    </Link>{' '}
                    <span className='small'>{dateConvert(publishingTime)}</span>
                  </p>
                  <button className='btn btn-sm text-primary d-flex align-items-center'>
                    <i className='bi bi-x-lg'></i>
                  </button>
                </div>
                <p className='small mb-0'>{commentContent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Comment.propTypes = {
  commentedUser: PropTypes.object,
  commentContent: PropTypes.string,
  publishingTime: PropTypes.string
}
export default Comment
