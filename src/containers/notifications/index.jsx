import React from 'react'
import Layout from '../../components/layout'
import getPageTitle from '../../utilities/getPageTitle'
import Button from '../../components/button'
import Pagination from '../../components/pagination'
import './notification.scss'

const SingleNotification = () => (
  <a className='notify__item ' href='#'>
    <div className='notify__thumb bg--primary'>
      <img src='https://egopielaundry.com/my/placeholder-image/350x300' />
    </div>
    <div className='notify__content'>
      <h6 className='title'>New member registered</h6>
      <span className='date'>
        <i className='far fa-clock'></i> 1 month ago
      </span>
    </div>
  </a>
)

const Notifications = () => {
  return (
    <Layout>
      <div className='page-heading'>
        <h6>{getPageTitle(location?.pathname)}</h6>
        <div>
          <Button theme='primary' size='sm'>
            Mark all as read
          </Button>
        </div>
      </div>
      <div>
        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
      </div>
      <Pagination />
    </Layout>
  )
}

export default Notifications
