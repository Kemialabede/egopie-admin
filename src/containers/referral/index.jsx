import React from 'react'
import './referral.scss'
import Layout from '../../components/layout'
import getPageTitle from '../../utilities/getPageTitle'

const ReferralManagement = () => {
  return (
    <Layout>
      <div className='referral'>
        <div className='page-heading'>
          <h6>{getPageTitle(location?.pathname)}</h6>
          <div className='referral__generateCard'>
            <input type='number' />
            <button>Generate</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ReferralManagement
