import React from 'react'
import './userDetails.scss'
import PropTypes from 'prop-types'

const ActionButton = ({ style, text }) => (
  <a
    href='https://egopielaundry.com/my/admin/users/login/history/8'
    style={style}
    className='btn btn--primary btn--shadow btn-block btn-lg'
  >
    {text}
  </a>
)

ActionButton.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
}

const UserAction = () => {
  return (
    <div className='user_action'>
      <br />
      <div className='userInfo-box userInfo-box__action'>
        <div className='card-body'>
          <h5 className='mb-20 text-muted'>User action</h5>
          <div
            className='user_action__button'
            style={{
              background: '#28c76f',
              boxShadow: '0 5px 10px 0 rgba(40, 199, 111, 0.35)',
            }}
          >
            <ActionButton text='Add/Subtract Balance' />
          </div>
          <div
            className='user_action__button'
            style={{
              background: '#7367f0',
              boxShadow: '0 5px 10px 0 rgba(115, 103, 240, 0.35)',
            }}
          >
            <ActionButton text='Login  Logs' />
          </div>
          <div
            className='user_action__button'
            style={{
              background: '#1e9ff2',
              boxShadow: '0 5px 10px 0 rgba(30, 159, 242, 0.35)',
            }}
          >
            <ActionButton text='Send Email' />
          </div>
          <div
            className='user_action__button'
            style={{
              background: '#10163A',
              boxShadow: '0 5px 10px 0 rgba(16, 22, 58, 0.35)',
            }}
          >
            <ActionButton text='Login as user' />
          </div>
          <div
            className='user_action__button'
            style={{
              background: '#ff9f43',
              boxShadow: '0 5px 10px 0 rgba(255, 159, 67, 0.35)',
            }}
          >
            <ActionButton text='Email log' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserAction
