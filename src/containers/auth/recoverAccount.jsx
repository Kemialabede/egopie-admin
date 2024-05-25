import React from 'react'
import AuthLayout from '../../components/layout/authLayout'
import { AiOutlineUser } from 'react-icons/ai'

const RecoverAccount = () => {
  return (
    <AuthLayout buttonText='Send Reset Code'>
      <div className='form-wrapper__inputContainer'>
        <p>Email</p>
        <input
          type='text'
          name='username'
          className=''
          id='username'
          value=''
          placeholder='Enter your email'
        />
        <div className='form-wrapper__inputContainer__icon'>
          <AiOutlineUser />
        </div>
      </div>
    </AuthLayout>
  )
}

export default RecoverAccount
