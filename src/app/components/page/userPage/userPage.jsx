import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../api'
import PropTypes from 'prop-types'
import QuailitiesList from '../../ui/qualities/qualitiesList'
import Comments from './comments'
const UserPage = ({ userId, onToggleBookmark }) => {
  const [user, setUser] = useState()
  useEffect(() => {
    api.users.getById(userId).then((data) => {
      setUser(data)
    })
  }, [])
  return (
    <>
      {user ? (
        <>
          <div className='container'>
            <div className='row gutters-sm'>
              <div className='col-md-4 mb-3'>
                <div className='card mb-3'>
                  <div className='card-body'>
                    <button className='position-absolute top-0 end-0 btn btn-light btn-sm'>
                      <Link to={'/fast-company/useredit/' + userId}>
                        <i className='bi bi-gear'></i>
                      </Link>
                    </button>
                    <div className='d-flex flex-column align-items-center text-center position-relative'>
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
                      <div className='mt-3'>
                        <h4> {user.name}</h4>
                        <p className='text-secondary mb-1'>
                          {user.profession.name}
                        </p>
                        <div className='text-muted'>
                          <i
                            className='bi bi-caret-down-fill text-primary'
                            role='button'
                          ></i>
                          <i
                            className='bi bi-caret-up text-secondary'
                            role='button'
                          ></i>
                          <span className='ms-2'>{user.rate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card mb-3'>
                  <div className='card-body d-flex flex-column justify-content-center text-center'>
                    <h5 className='card-title'>
                      <span>Qualities</span>
                    </h5>
                    <p className='card-text'>
                      <QuailitiesList qualities={user.qualities} />
                    </p>
                  </div>
                </div>
                <div className='card mb-3'>
                  <div className='card-body d-flex flex-column justify-content-center text-center'>
                    <h5 className='card-title'>
                      <span>Completed meetings</span>
                    </h5>

                    <h1 className='display-1'>{user.completedMeetings}</h1>
                  </div>
                </div>
              </div>
              <div className='col-md-8'>
                <div className='card mb-2'>
                  <div className='card-body'>
                    <div>
                      <h2>New comment</h2>
                      <div className='mb-4'>
                        <select className='form-select' name='userId' value=''>
                          <option disabled value='' selected>
                            Выберите пользователя
                          </option>

                          <option>Доктор</option>
                          <option>Тусер</option>
                        </select>
                      </div>
                      <div className='mb-4'>
                        <label
                          htmlFor='exampleFormControlTextarea1'
                          className='form-label'
                        >
                          Сообщение
                        </label>
                        <textarea
                          className='form-control'
                          id='exampleFormControlTextarea1'
                          rows='3'
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card mb-3'>
                  <div className='card-body '>
                    <h2>Comments</h2>
                    <hr />
                    <Comments userId={user._id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  )
}
UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
  onToggleBookmark: PropTypes.func
}

export default UserPage
