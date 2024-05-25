import React from 'react'
import '../../deposit.scss'
import ResponseDetails from './responseDetails'
import Logs from './logs'
import Authorization from './authorization'
import Customer from './customer'
import OtherDetails from './otherDetails'
import History from './history'
import FeesBreakdown from './feesBreakdown'

const UserDepositInformation = () => {
  return (
    <div className='deposit-info__container'>
      <p className='deposit-info__container__heading'>
        User Deposit Information
      </p>
      <div>
        <ResponseDetails />
        <div>
          <p className='deposit-info__container__heading'>Meta data</p>
          <div className='deposit-info__container__paragraph'>
            <h6>Referrer</h6>
            <p>https://egopielaundry.com/my/user/deposit/confirm</p>
          </div>
        </div>
        <Logs />
        <History />
        <Authorization />
        <Customer />
        {/* <Split /> */}
        <OtherDetails />
        <FeesBreakdown />
      </div>
    </div>
  )
}

export default UserDepositInformation
