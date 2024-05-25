import React from 'react'
import Layout from '../../../components/layout'
import getPageTitle from '../../../utilities/getPageTitle'
import Profile from './profile'
import UserInformation from './userInformation'
import TransactionCount from './transactionCount'
import PatientInformation from './patientInformation'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import UserAction from './userAction'

const UserDetails = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginBottom: '25px',
          }}
          onClick={() => navigate(-1)}
        >
          <IoArrowBack style={{ width: '25px', height: '25px' }} /> &nbsp;
          <h6 style={{ fontSize: '18px', color: '#34495e', fontWeight: 500 }}>
            {getPageTitle(location?.pathname)}
          </h6>
        </div>
      </div>
      <div className='profile-container'>
        <div className='profile-container__box'>
          <Profile />
          <UserInformation />
          <UserAction />
        </div>
        <div style={{ width: '100%' }}>
          <TransactionCount />
          <PatientInformation />
        </div>
      </div>
    </Layout>
  )
}

export default UserDetails
