import React, { useState } from 'react'
import './auth.scss'
import AuthLayout from '../../components/layout/authLayout'
import { AiOutlineUser } from 'react-icons/ai'
import { IoLockClosedOutline } from 'react-icons/io5'

const Login = () => {
  const [formType, setFormType] = useState('password')
  return (
    <AuthLayout caption buttonText='Login' login>
      <div className='form-wrapper__inputContainer'>
        <p>Username</p>
        <input
          type='text'
          name='username'
          className=''
          id='username'
          value=''
          placeholder='Enter your username'
        />
        <div className='form-wrapper__inputContainer__icon'>
          <AiOutlineUser />
        </div>
      </div>
      <div className='form-wrapper__inputContainer'>
        <p>Password</p>
        <input
          type={formType}
          name='password'
          className=''
          id='pass'
          placeholder='Enter your password'
        />
        <div className='form-wrapper__inputContainer__icon'>
          <IoLockClosedOutline
            style={{ cursor: 'pointer' }}
            onClick={() =>
              setFormType(formType === 'password' ? 'text' : 'password')
            }
          />
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
