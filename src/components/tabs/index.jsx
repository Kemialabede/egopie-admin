import React from 'react'
import './tabs.scss'
import PropTypes from 'prop-types'

const Tabs = ({ tabs, active, setActive }) => {
  const activeClass = (tab) => tab?.id === active?.id && 'tabs__active'
  return (
    <div>
      <ul className='tabs'>
        {tabs?.map((tab) => (
          <li className={activeClass(tab)} key={tab.id}>
            <button
              type='button'
              onClick={() => {
                setActive(tab)
              }}
              style={{ textTransform: 'capitalize' }}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.array,
  active: PropTypes.bool,
  setActive: PropTypes.func,
}

export default Tabs
