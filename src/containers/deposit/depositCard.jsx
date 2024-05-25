import React from 'react'
import './deposit.scss'
import PropTypes from 'prop-types'

const DepositCard = ({ amount, caption, style }) => {
  return (
    <div className='deposit_card' style={style}>
      <div className='deposit_card__single'>
        <h5>{amount}</h5>
        <p>{caption}</p>
      </div>
    </div>
  )
}

DepositCard.propTypes = {
  amount: PropTypes.string,
  caption: PropTypes.string,
  style: PropTypes.object,
}
export default DepositCard
