import React from 'react'
import '../deposit.scss'

const PaymentMethodInfo = () => {
  return (
    <div className='payment_method__container'>
      <p className='payment_method__container__heading'>Deposit Via PayStack</p>
      <div className='payment_method__container__flex'>
        <div>
          <p>Date</p>
          <p>2023-06-13 12:09 PM</p>
        </div>
        <div>
          <p>Transaction Number</p>
          <p>QRAEEBFCENA7</p>
        </div>
        <div>
          <p>Username</p>
          <p>signzhill</p>
        </div>
        <div>
          <p>Method</p>
          <p>PayStack</p>
        </div>
        <div>
          <p>Amount</p>
          <p>500.00 NGN</p>
        </div>
        <div>
          <p>Charge</p>
          <p>0.00 NGN</p>
        </div>
        <div>
          <p>After Charge</p>
          <p>500.00 NGN</p>
        </div>
        <div>
          <p>Rate</p>
          <p>1 NGN = 1.00 NGN</p>
        </div>
        <div>
          <p>Payable</p>
          <p>500.00 NGN</p>
        </div>
        <div>
          <p>Status</p>
          <p>Active</p>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodInfo
