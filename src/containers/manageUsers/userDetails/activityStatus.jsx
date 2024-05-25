import React from 'react'
import './userDetails.scss'
import PropTypes from 'prop-types'

const SwitchBox = ({
  onChange,
  isChecked,
  toggle,
  label,
  text,
  labelOn,
  labelOff,
}) => {
  const id = `toggle--${label?.toLowerCase().replace(/\s+/g, '-')}`
  return (
    <div>
      <p className='activity_status__caption'>{text}</p>
      <div
        className='toggle toggle--switch'
        style={{
          width: '250px',
          height: '30px',
        }}
      >
        <input
          type='checkbox'
          id={id}
          className='toggle--checkbox'
          checked={isChecked}
          onChange={onChange || toggle}
        />
        <label className='toggle--btn' htmlFor={id}>
          <span
            className='toggle--feature'
            data-label-on={labelOn}
            data-label-off={labelOff}
          ></span>
        </label>
      </div>
    </div>
  )
}

SwitchBox.propTypes = {
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  toggle: PropTypes.bool,
  label: PropTypes.string,
  text: PropTypes.string,
  labelOn: PropTypes.string,
  labelOff: PropTypes.string,
}

const ActivityStatus = () => {
  return (
    <div>
      <div className='activity_status'>
        <SwitchBox
          text='Status'
          label='status'
          labelOn='Active'
          labelOff='Not Active'
        />
        <SwitchBox
          text='Email Verification'
          label='email'
          labelOn='Verified'
          labelOff='Not Verified'
        />
        <SwitchBox
          text='SMS Verification'
          label='sms'
          labelOn='Verified'
          labelOff='Not Verified'
        />
        <SwitchBox
          text='2FA Status'
          label='2fa-status'
          labelOn='Verified'
          labelOff='Not Verified'
        />
        <SwitchBox
          text='2FA Verification'
          label='2fa-verification'
          labelOn='Verified'
          labelOff='Not Verified'
        />
        <SwitchBox
          text='KYC Verification'
          label='kyc'
          labelOn='Verified'
          labelOff='Not Verified'
        />
      </div>
    </div>
  )
}

export default ActivityStatus
