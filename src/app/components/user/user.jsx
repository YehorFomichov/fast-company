import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api'
import PropTypes from 'prop-types'
import QuailitiesList from '../qualitiesList'
import Bookmark from '../bookmark'
import './user.scss'
const User = ({ userId, onToggleBookmark }) => {
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
                    <li>
                      <Link to='/users' className='btn btn-primary'>
                        Возврат
                      </Link>
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
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  )
}
User.propTypes = {
  userId: PropTypes.string.isRequired,
  onToggleBookmark: PropTypes.func
}

export default User
