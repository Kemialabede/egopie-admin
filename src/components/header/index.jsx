import React, { useState } from 'react'
import './header.scss'
import { VscSearch } from 'react-icons/vsc'
import { BsFullscreenExit } from 'react-icons/bs'
import { IoIosArrowDropdown, IoIosNotificationsOutline } from 'react-icons/io'
import Dropdown from '../dropdown'
import { Menu } from 'evergreen-ui'
import { CgProfile } from 'react-icons/cg'
import { LuKeyRound } from 'react-icons/lu'
import { IoMdLogOut } from 'react-icons/io'
import Notifications from './notifications'
import useFullScreen from '../../hooks/useFullScreen'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import HamburgerMenu from '../../components/hamburgerMenu'
import SidebarModal from '../sidebar/sidebarModal'
import { IoClose } from 'react-icons/io5'

const Header = () => {
  const { isFullScreen, toggleFullScreen } = useFullScreen()
  const [isOpened, setIsOpened] = useState(false)
  const [toggleSearch, setToggleSearch] = useState(false)

  const navigate = useNavigate()
  return (
    <>
      {toggleSearch && (
        <form className='navbar-search'>
          <div className='navbar-search__search'>
            <VscSearch style={{ width: '20px', height: '20px' }} />
            <div className='navbar-search__input'>
              <input
                type='search'
                name='navbar-search__field'
                id='navbar-search__field'
                placeholder='Search...'
              />
            </div>
          </div>
          <IoClose
            onClick={() => setToggleSearch(false)}
            style={{ width: '24px', height: '24px', cursor: 'pointer' }}
          />
          {/* <div id='navbar_search_result_area'>
            <ul className='navbar_search_result'></ul>
          </div> */}
        </form>
      )}
      <nav className='navbar-wrapper'>
        <div className='navbar__left'>
          <div className='hamburger'>
            <HamburgerMenu
              toggleMenu={() => setIsOpened(!isOpened)}
              isOpen={isOpened}
            />
            {isOpened && (
              <SidebarModal isShown={isOpened} onClose={setIsOpened} />
            )}
          </div>
          <button
            type='button'
            className='fullscreen-btn'
            onClick={toggleFullScreen}
          >
            {isFullScreen === false ? (
              <BsFullscreenExit
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
            ) : (
              <BsArrowsFullscreen
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
            )}
          </button>
        </div>

        <div className='navbar__right'>
          <ul className='navbar__action-list'>
            <li>
              <button
                type='button'
                className='navbar-search__btn-open'
                onClick={() => setToggleSearch(!toggleSearch)}
              >
                <VscSearch />
              </button>
            </li>

            <li className='dropdown'>
              <Dropdown
                icon={
                  <>
                    <IoIosNotificationsOutline
                      style={{
                        width: '24px',
                        height: '24px',
                        color: '#00a6f7',
                      }}
                    />
                    <span className='pulse--primary'></span>
                  </>
                }
              >
                <Notifications />
              </Dropdown>
            </li>

            <li className='dropdown'>
              <button
                type='button'
                className=''
                data-toggle='dropdown'
                data-display='static'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <span className='navbar-user'>
                  <span className='navbar-user__thumb'>
                    <img
                      src='https://egopielaundry.com/my/assets/images/default.png'
                      alt='image'
                    />
                  </span>
                  <span className='navbar-user__info'>
                    <span className='navbar-user__name'>admin</span>
                  </span>
                  <Dropdown icon={<IoIosArrowDropdown />}>
                    <Menu.Item className='menu-item'>
                      <div onClick={() => navigate('/profile')}>
                        <CgProfile />
                        <p>Profile</p>
                      </div>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item className='menu-item'>
                      <div onClick={() => navigate('/profile')}>
                        <LuKeyRound />
                        <p>Password</p>
                      </div>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item className='menu-item'>
                      <div onClick={() => navigate('/')}>
                        <IoMdLogOut />
                        <p>Logout</p>
                      </div>
                    </Menu.Item>
                  </Dropdown>
                  <span className='icon'></span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
