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
      <Route path='/my/admin/dashboard' element={<DashboardPage />} />
      <Route path='/my/admin/users' element={<Users />} />
      <Route path='/my/admin/users/detail' element={<UserDetails />} />
      <Route path='/my/admin/payment-gateway' element={<PaymentGateway />} />
      <Route path='/my/admin/deposits' element={<Deposit />} />
      <Route path='/my/admin/deposits/detail' element={<DepositDetails />} />
      <Route path='/my/admin/tickets' element={<SupportTicket />} />
      <Route path='/my/admin/referral' element={<ReferralManagement />} />
      <Route path='/my/admin/card-management' element={<CardManagement />} />
      <Route path='/my/admin/transactions' element={<Transaction />} />
      <Route path='/my/admin/password/reset' element={<RecoverAccount />} />
      <Route path='/my/admin/profile' element={<Profile />} />
      <Route path='/my/admin/notifications' element={<Notifications />} />
    </Routes>
  )
}

export default AppRouter
