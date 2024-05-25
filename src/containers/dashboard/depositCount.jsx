import React from 'react'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import './dashboard.scss'

const DepositCount = () => {
  return (
    <div className='deposit_count'>
      <div className='deposit_count__total'>
        <div className='deposit_count__total__deposit'>
          <p>500.00 NGN</p>
          <p>Total Deposit</p>
        </div>
        <br />
        <br />
        <div>
          <p>0.00 NGN</p>
          <p>Total Deposit Charge</p>
        </div>
      </div>
      <div className='deposit_count__pending'>
        <div className='deposit_count__pending__image'>
          <IoCloudDownloadOutline
            style={{ color: 'white', height: '46px', width: '46px' }}
          />
        </div>
        <div className='deposit_count__pending__count'>
          <p>0</p>
          <p>Pending Deposit</p>
        </div>
      </div>
    </div>
  )
}

export default DepositCount
