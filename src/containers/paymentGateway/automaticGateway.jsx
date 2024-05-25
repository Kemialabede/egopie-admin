import React from 'react'
import Layout from '../../components/layout'
import getPageTitle from '../../utilities/getPageTitle'
import Table from '../../components/table'
import {
  automaticGateWayData,
  automaticGatewayHeaders,
} from '../../mocks/payment'
import { MdOutlineModeEdit } from 'react-icons/md'
import { IoMdEye } from 'react-icons/io'

const AutomaticGateway = () => {
  return (
    <Layout>
      <div className='page-heading'>
        <h6>{getPageTitle(location?.pathname)}</h6>
      </div>
      <Table
        tableHeaders={automaticGatewayHeaders}
        tableData={automaticGateWayData}
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

export default AutomaticGateway
