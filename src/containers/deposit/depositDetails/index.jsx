import React from 'react'
import Layout from '../../../components/layout'
import PaymentMethodInfo from './paymentMethod'
import UserDepositInformation from './userDepositInfo/userDepositInformation'
import { IoArrowBack } from 'react-icons/io5'
import '../deposit.scss'
import { useNavigate } from 'react-router-dom'

const DepositDetails = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className='details-heading' onClick={() => navigate(-1)}>
        <IoArrowBack style={{ width: '25px', height: '25px' }} />
        <p>signzhill requested 500.00 NGN</p>
      </div>
      <PaymentMethodInfo />
      <UserDepositInformation />
    </Layout>
  )
}

export default DepositDetails
