import React from 'react'
import './sidebar.scss'
import { navLinks } from './navLinks'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Sidebar = ({ isOpen }) => {
  return (
    <div>
      <div
        className={`${isOpen ? 'sidebar' : 'sidebar__minimised'} capsule--rounded bg--15 none overlay--opacity-8`}
        data-background='https://egopielaundry.com/my/assets/admin/images/sidebar/2.jpg'
      >
        <button className='res-sidebar-close-btn'></button>
        <div>
          <div className='sidebar__logo'>
            <a href='/my/admin/dashboard' className='sidebar__main-logo'>
              <img
                src='https://egopielaundry.com/my/assets/images/logoIcon/logo.png'
                alt='image'
              />
            </a>
            <a href='/my/admin/dashboard' className='sidebar__logo-shape'>
              <img
                src='https://egopielaundry.com/my/assets/images/logoIcon/favicon.png'
                alt='image'
              />
            </a>
          </div>
          <div
            className='slimScrollDiv'
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: 'auto',
              height: 'calc(-86.75px + 100vh)',
            }}
          >
            <div
              className='sidebar__menu-wrapper'
              id='sidebar__menuWrapper'
              style={{
                overflow: 'scroll',
                width: 'auto',
                height: 'calc(-86.75px + 100vh)',
              }}
            >
              <ul className='sidebar__menu'>
                {navLinks?.map((item) => {
                  return (
                    <li
                      className={`sidebar-menu-item ${item?.subnav?.length ? 'sidebar-dropdown' : ''}`}
                      key={item.id}
                    >
                      <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                          isActive ? 'sidebar-active' : ''
                        }
                      >
                        <div style={{ marginRight: '15px' }}>{item.icon}</div>
                        {isOpen && (
                          <span className='menu-title'>{item.name}</span>
                        )}
                      </NavLink>
                      <div
                        className={`sidebar-submenu sidebar-submenu__open`}
                        style={{ display: 'block' }}
                      >
                        <ul>
                          {item.subnav?.map((i) => {
                            return (
                              <li className='sidebar-menu-item' key={i.name}>
                                <a href={i.link} className='nav-link'>
                                  <i className='menu-icon las la-dot-circle'></i>
                                  {isOpen ? (
                                    <span className='menu-title'>{i.name}</span>
                                  ) : null}
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
}

export default Sidebar
