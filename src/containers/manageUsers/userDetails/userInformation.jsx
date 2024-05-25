import React from 'react'
import './userDetails.scss'

const UserInformation = () => {
  return (
    <div className='userInfo-box'>
      <div className='card-body'>
        <h5 className='mb-20 text-muted'>User information</h5>
        <ul className='userInfo-box__list-group'>
          <li className='userInfo-box__list-group-item'>
            Username <span className='font-weight-bold'>changen</span>
          </li>

          <li className='userInfo-box__list-group-item'>
            Status <span className='badge badge-pill bg--success'>Active</span>
          </li>

          <li className='userInfo-box__list-group-item'>
            Balance <span className='font-weight-bold'>0.00 NGN</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserInformation
