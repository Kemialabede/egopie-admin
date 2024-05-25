import React, { useState } from 'react'
import Layout from '../../components/layout'
import Table from '../../components/table'
import { transactionData, transactionHeader } from '../../mocks/transactions'
import Tabs from '../../components/tabs'
import getPageTitle from '../../utilities/getPageTitle'
import Search from '../../components/search'
import Indicator from '../../components/indicators'
import './transactions.scss'

const tabs = [
  {
    id: 1,
    label: 'All Transactions',
  },
  {
    id: 2,
    label: 'Successful Transactions',
  },
  {
    id: 3,
    label: 'Failed Transactions',
  },
]

const Transaction = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  return (
    <Layout>
      <div className='page-heading'>
        <h6>
          {getPageTitle(activeTab ? activeTab?.label : location?.pathname)}
        </h6>
        <div>
          <Search />
        </div>
      </div>
      <div>
        <Tabs tabs={tabs} active={activeTab} setActive={setActiveTab} />
      </div>
      <Table tableHeaders={transactionHeader} tableData={transactionData}>
        {(row) => (
          <>
            <td>{row.transactionID}</td>
            <td>{row.date}</td>
            <td>{row.time}</td>
            <td>{row.totalAmount}</td>
            <td>{row.customerName}</td>
            <td>{row.paymentMethod}</td>
            <td className='flex-indicator'>
              <Indicator status='completed' statusIndicator='completed' />
            </td>
          </>
        )}
      </Table>
    </Layout>
  )
}

export default Transaction
