import React from 'react'
import Table from '../../../../components/table'

const tableHeader = [
  {
    text: 'Amount',
    key: 'amount',
  },
  {
    text: 'Formula',
    key: 'formula',
  },
  {
    text: 'Type',
    key: 'type',
  },
]

const tableData = [
  {
    amount: '750',
    formula: '-',
    type: 'paystack',
  },
]

const FeesBreakdown = () => {
  return (
    <div className='deposit-info__container__table'>
      <p className='deposit-info__container__heading'>Fess Breakdown</p>
      <Table tableHeaders={tableHeader} tableData={tableData} noPagination>
        {(row) => (
          <>
            <td>{row.amount}</td>
            <td>{row.formula}</td>
            <td>{row.type}</td>
          </>
        )}
      </Table>
    </div>
  )
}

export default FeesBreakdown
