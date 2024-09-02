import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Table from '../../components/table'
import { SlScreenDesktop } from 'react-icons/sl'
import './manageUsers.scss'
import getPageTitle from '../../utilities/getPageTitle'
import Tabs from '../../components/tabs'
import { allUserData, allUsersHeader } from '../../mocks/users'
import Search from '../../components/search'
import { useNavigate } from 'react-router-dom'

const tabs = [
  {
    id: 1,
    label: 'All Users',
  },
  {
    id: 2,
    label: 'Active Users',
  },
  {
    id: 3,
    label: 'Banned Users',
  },
  {
    id: 4,
    label: 'Email Unverified',
  },
  {
    id: 5,
    label: 'SMS Unverified',
  },
  {
    id: 6,
    label: 'KYC Submitted',
  },
  {
    id: 7,
    label: 'Email to All',
  },
]

const Users = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const handlePageData = useCallback(() => {
    switch (activeTab?.label) {
      case 'Active Users':
        return allUserData
      case 'Email Unverified':
        return allUserData?.slice(0, 5)
      case 'SMS Unverified':
        return []
      case 'KYC Submitted':
        return allUserData?.slice(0, 2)
      case 'Banned Users':
        return []
      default:
        return allUserData
    }
  }, [activeTab])

  useEffect(() => {
    setData(handlePageData())
  }, [activeTab, handlePageData])

  return (
    <Layout>
      <div className='page-heading'>
        <h6>{getPageTitle(location?.pathname)}</h6>
        <Search placeholder={'Username and email'} />
      </div>
      <div>
        <Tabs tabs={tabs} setActive={setActiveTab} active={activeTab} />
      </div>
      <div>
        <Table tableHeaders={allUsersHeader} tableData={data}>
          {(row) => (
            <>
              <td style={{ fontSize: '14px' }}>
                <p className='font-weight-700'>{row.name}</p>
                <p style={{ color: '#007bff' }}>{row.username}</p>
              </td>
              <td>
                <p>{row.email}</p>
                <p>{row.phone_no}</p>
              </td>
              <td className='font-weight-700'>{row.country}</td>
              <td>
                <p>{row.date}</p>
                <p>1 month ago</p>
              </td>
              <td>
                <p className='font-weight-700'>{row.balance}</p>
                <p>{row.account_no}</p>
              </td>
              <td>
                <div
                  onClick={() => navigate('/users/detail')}
                  style={{ cursor: 'pointer' }}
                >
                  <SlScreenDesktop
                    className='action-button'
                    style={{ backgroundColor: '#7367f0' }}
                  />
                </div>
              </td>
            </>
          )}
        </Table>
      </div>
    </Layout>
  )
}

export default Users
