import React from 'react'
import './dashboard.scss'
import PropTypes from 'prop-types'

export const Card = ({ style, icon, count, caption, link }) => (
  <div className='dashboard-w1 aggregate_card' style={style}>
    <div className='icon'>{icon}</div>
    <div className='details'>
      <div className='numbers'>
        <span className='amount'>{count}</span>
      </div>
      <div className='desciption'>
        <span className='text--small'>{caption}</span>
      </div>
      <a href={link} className='dashboard-w1__btn'>
        View All
      </a>
    </div>
  </div>
)

Card.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.node,
  count: PropTypes.string,
  caption: PropTypes.string,
  link: PropTypes.string,
}

const AggregateCount = () => {
  return (
    <div className='aggregate-count-container'>
      <Card
        style={{ background: '#7367f0' }}
        icon={<i className='fa fa-users'></i>}
        count={8}
        caption='Total Users'
        link='/users'
      />
      <Card
        style={{ background: '#00BCD4' }}
        icon={<i className='fa fa-users'></i>}
        count={8}
        caption='Total Active Cards'
        link='/users'
      />
      <Card
        style={{ background: '#FF9800' }}
        icon={<i className='fa fa-shopping-cart'></i>}
        count={1}
        caption='Total Service Centers'
        link='/users'
      />
      <Card
        style={{ background: '#E91E63' }}
        icon={<i className='fa fa-shopping-cart'></i>}
        count={0}
        caption='Total Revenue'
        link='/users'
      />
    </div>
  )
}

export default AggregateCount
