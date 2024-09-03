import React from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'
import PropTypes from 'prop-types'

const AuthLayout = ({ children, caption, buttonText, login }) => {
  return (
    <div className='page-wrapper default-version'>
      <div
        className='form-area bg_img'
        data-background='https://egopielaundry.com/my/assets/admin/images/1.jpg'
        style={{
          backgroundImage:
            'url(https://egopielaundry.com/my/assets/admin/images/1.jpg)',
        }}
      >
        <div className='form-wrapper' style={{ width: '420px' }}>
          <div className='form-wrapper__heading'>
            <h4>
              Welcome to <strong>Egopie Laundry</strong>
            </h4>
            {caption && <p>Admin Login to Egopie Laundry dashboard</p>}
          </div>
          <form
            action='https://egopielaundry.com/my/admin'
            method='POST'
            className='form-container'
          >
            <input
              type='hidden'
              name='_token'
              value='aG9KVmYPIC8SJXLHpDfrojEF25DZI4jmmgP33yAw'
            />
            <div>{children}</div>
            <div className='form-wrapper__forgotPassword'>
              <a href={login ? '/password/reset' : '/'}>
                <RiLockPasswordLine />
                {login ? <p>Forgot password?</p> : <p>Login here?</p>}
              </a>
            </div>
            <div className='form-wrapper__btn'>
              <button type='submit'>
                {buttonText} <i className='las la-sign-in-alt'></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node,
  caption: PropTypes.string,
  buttonText: PropTypes.string,
  login: PropTypes.bool,
}

export default AuthLayout
