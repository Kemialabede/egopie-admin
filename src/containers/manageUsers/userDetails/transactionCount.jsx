import React from 'react'
import { GrTransaction } from 'react-icons/gr'

const TransactionCount = () => {
  return (
    <div className='transaction_count'>
      <div className='transaction_count__container'>
        <a
          href='https://egopielaundry.com/my/admin/user/deposits/8'
          className='item--link'
        ></a>
        <div className='transaction_count__container__icon'>
          <i className='fa fa-credit-card'></i>
        </div>
        <div className='details'>
          <div className='numbers'>
            <span className='currency-sign'> ₦</span>
            <span className='amount'>0.00</span>
          </div>
          <div className='desciption'>
            <span>Total Deposited</span>
          </div>
        </div>
      </div>
      <div className='transaction_count__container'>
        <a
          href='https://egopielaundry.com/my/admin/user/transactions/8'
          className='item--link'
        ></a>
        <div className='transaction_count__container__icon'>
          <GrTransaction />
        </div>
        <div className='details'>
          <div className='numbers'>
            <span className='amount'>0</span>
          </div>
          <div className='desciption'>
            <span>Transactions</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionCount
