import React from 'react'
import './userDetails.scss'
import { BsPersonSquare } from 'react-icons/bs'

const Profile = () => {
  return (
    <div>
      <div className='profile-box'>
        <div>
          <div>
            <div className='profile-box__image'>
              <BsPersonSquare />
            </div>
            <div className='profile-box__text'>
              <h4 className=''>change new</h4>
              <span className='text--small'>
                Joined At <strong>30 Mar, 2024 04:51 PM</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
