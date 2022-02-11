import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../../api'
import PropTypes from 'prop-types'
import QuailitiesList from '../../ui/qualities/qualitiesList'
import Bookmark from '../../common/bookmark'
import './userPage.scss'
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
          <div className='artboard'>
            <div className='card'>
              <div className='card__side card__side--back'>
                <div className='card__cover'>
                  <h4 className='card__heading'>
                    <span className='card__heading-span'>{user.name}</span>
                  </h4>
                </div>
                <div className='card__details'>
                  <ul>
                    <li>{`Профессия: ${user.profession.name}`}</li>
                    <li>
                      Качества:
                      <QuailitiesList qualities={user.qualities} />
                    </li>
                    <li>{`Встретился, раз: ${user.completedMeetings}`}</li>
                    <li>{`Оценка: ${user.rate}`}</li>
                    <li>
                      <button onClick={() => onToggleBookmark(user._id)}>
                        <Bookmark status={user.bookmark} />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='card__side card__side--front'>
                <div className='card__theme'>
                  <div className='card__theme-box'>
                    <p className='card__subject'>Пользователь</p>
                    <p className='card__title'>{user.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <li>
            <Link
              to={'/users/' + userId + '/edit'}
              className='btn btn-outline-dark'
              userId={userId}
            >
              Изменить
            </Link>
          </li>
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
