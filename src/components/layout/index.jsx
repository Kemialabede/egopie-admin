import React, { useState } from 'react'
import Sidebar from '../sidebar'
import Header from '../header'
import './layout.scss'
import PropTypes from 'prop-types'

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = (e) => {
    if (e.target.checked) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
    setIsOpen(!isOpen)
  }

  return (
    <div style={{ background: '#f3f5f7' }}>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <Header />
      <div className={isOpen ? 'body-wrapper' : 'body-wrapper__full'}>
        {children}
      </div>
    </div>
  )
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
}

export default DashboardLayout
