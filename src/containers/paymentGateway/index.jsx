import React, { useState } from 'react'
import getPageTitle from '../../utilities/getPageTitle'
import Layout from '../../components/layout'
import Tabs from '../../components/tabs'
import Table from '../../components/table'
import {
  automaticGateWayData,
  automaticGatewayHeaders,
  manualGatewayHeaders,
} from '../../mocks/payment'
import { MdOutlineModeEdit } from 'react-icons/md'
import { IoMdEye } from 'react-icons/io'
import Search from '../../components/search'

const tabs = [
  {
    id: 1,
    label: 'Automatic Gateways',
  },
  {
    id: 2,
    label: 'Manual Gateways',
  },
]

const PaymentGateway = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <Layout>
      <div className='page-heading'>
        <h6>{getPageTitle(location?.pathname)}</h6>
        <Search />
      </div>
      <div>
        <Tabs tabs={tabs} setActive={setActiveTab} active={activeTab} />
      </div>
      <Table
        tableHeaders={
          activeTab?.id === 1 ? automaticGatewayHeaders : manualGatewayHeaders
        }
        tableData={activeTab?.id === 1 ? automaticGateWayData : []}
      >
        {(row) => (
          <>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              <div className='logo'>
                <img
                  src='https://egopielaundry.com/my/assets/images/gateway/5f6f1b2b20c6f1601116971.jpg'
                  alt='image'
                />
              </div>
              <p>{row.gateway}</p>
            </td>
            <td>{row.supported_currency}</td>
            <td>{row.enabled_currency}</td>
            <td>{row.status}</td>
            <td>
              <div>
                <MdOutlineModeEdit
                  className='action-button'
                  style={{ backgroundColor: '#7367f0' }}
                />{' '}
                &nbsp;
                <IoMdEye
                  className='action-button'
                  style={{ backgroundColor: '#28c76f' }}
                />
              </div>
            </td>
          </>
        )}
      </Table>
    </Layout>
  )
}

export default PaymentGateway
