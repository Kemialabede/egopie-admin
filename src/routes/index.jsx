import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from '../pages/dashboardPage'
import Deposit from '../containers/deposit'
import Users from '../containers/manageUsers'
import PaymentGateway from '../containers/paymentGateway'
import SupportTicket from '../containers/supportTicket'
import ReferralManagement from '../containers/referral'
import Login from '../containers/auth/login'
import CardManagement from '../containers/cardManagement'
import Transaction from '../containers/transactions'
import UserDetails from '../containers/manageUsers/userDetails'
import DepositDetails from '../containers/deposit/depositDetails'
import RecoverAccount from '../containers/auth/recoverAccount'
import Profile from '../containers/profile'
import Notifications from '../containers/notifications'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/users' element={<Users />} />
      <Route path='users/detail' element={<UserDetails />} />
      <Route path='payment-gateway' element={<PaymentGateway />} />
      <Route path='/deposits' element={<Deposit />} />
      <Route path='/deposits/detail' element={<DepositDetails />} />
      <Route path='/tickets' element={<SupportTicket />} />
      <Route path='/referral' element={<ReferralManagement />} />
      <Route path='/card-management' element={<CardManagement />} />
      <Route path='/transactions' element={<Transaction />} />
      <Route path='/password/reset' element={<RecoverAccount />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/notifications' element={<Notifications />} />
    </Routes>
  )
}

export default AppRouter
