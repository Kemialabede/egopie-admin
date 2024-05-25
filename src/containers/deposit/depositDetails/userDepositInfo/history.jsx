import React from 'react'
import Table from '../../../../components/table'
import '../../deposit.scss'

const tableHeader = [
  {
    text: 'Type',
    key: 'type',
  },
  {
    text: 'Message',
    key: 'message',
  },
  {
    text: 'Time',
    key: 'time',
  },
]

const tableData = [
  {
    type: 'input',
    message: 'Filled this field: card number',
    time: 10,
  },
  {
    type: 'input',
    message: 'Filled this field: card number',
    time: 10,
  },
  {
    type: 'input',
    message: 'Filled this field: card cvv',
    time: 16,
  },
  {
    type: 'auth',
    message: 'Authentication Required: otp',
    time: 12,
  },
  {
    type: 'input',
    message: 'Filled this field: card number',
    time: 10,
  },
  {
    type: 'input',
    message: 'Filled this field: card number',
    time: 10,
  },
]

const History = () => {
  return (
    <div className='deposit-info__container__table'>
      <p className='deposit-info__container__heading'>History</p>
      <Table tableHeaders={tableHeader} tableData={tableData} noPagination>
        {(row) => (
          <>
            <td>{row.type}</td>
            <td>{row.message}</td>
            <td>{row.time}</td>
          </>
        )}
      </Table>
    </div>
  )
}

export default History
