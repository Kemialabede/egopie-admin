import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Table from '../../components/table'
import { depositData, depositHeader } from '../../mocks/deposits'
import getPageTitle from '../../utilities/getPageTitle'
import Tabs from '../../components/tabs'
import Search from '../../components/search'
import DatePickerInput from '../../components/datePicker'
import './deposit.scss'
import { SlScreenDesktop } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import DepositCard from './depositCard'
import Indicator from '../../components/indicators'

const tabs = [
  {
    id: 1,
    label: 'All Deposits',
  },
  {
    id: 2,
    label: 'Pending Deposits',
  },
  {
    id: 3,
    label: 'Approved Deposits',
  },
  {
    id: 4,
    label: 'Successful Deposits',
  },
  {
    id: 5,
    label: 'Rejected Deposits',
  },
]

const Deposit = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const handlePageData = useCallback(() => {
    switch (activeTab?.label) {
      case 'All Deposits':
        return depositData
      case 'Successful Deposits':
        return depositData
      default:
        return []
    }
  }, [activeTab])

  useEffect(() => {
    setData(handlePageData())
  }, [activeTab, handlePageData])

  return (
    <Layout>
      <div className='page-heading'>
        <h6>
          {getPageTitle(activeTab ? activeTab?.label : location?.pathname)}
        </h6>
        <div className='deposit_actions_container'>
          <DatePickerInput />
          <Search />
        </div>
      </div>
      {activeTab?.label === 'All Deposits' && (
        <div className='deposit_card__container'>
          <DepositCard
            amount='₦500.00'
            caption='Successful Deposit'
            style={{ backgroundColor: '#28c76f' }}
          />
          <DepositCard
            amount='₦0.00'
            caption='Pending Deposit'
            style={{ backgroundColor: '#ff9234' }}
          />
          <DepositCard
            amount='₦0.00'
            caption='Rejected Deposit'
            style={{ backgroundColor: '#E91E63' }}
          />
        </div>
      )}
      <div>
        <Tabs tabs={tabs} setActive={setActiveTab} active={activeTab} />
      </div>
      <Table tableHeaders={depositHeader} tableData={data}>
        {(row) => (
          <>
            <td>
              <p>{row.gateway}</p>
              <p>{row.code}</p>
            </td>
            <td>{row.date}</td>
            <td>
              <p>{row.name}</p>
              <p>{row.username}</p>
            </td>
            <td>{row.amount}</td>
            <td>{row.amount}</td>
            <td>
              <Indicator status='approved' statusIndicator='approved' />
            </td>
            <td>
              <div
                onClick={() => navigate('/deposits/detail')}
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
    </Layout>
  )
}

export default Deposit
