import React from 'react'
import Table from '../../components/table'
import { linkedCardsData, linkedCardsHeader } from '../../mocks/cardManagement'

const LinkedCards = () => {
  return (
    <div>
      <Table tableHeaders={linkedCardsHeader} tableData={linkedCardsData}>
        {(row, index) => (
          <>
            <td>{index + 1}</td>
            <td>{row.card_no}</td>
            <td>{row.serial_no}</td>
            <td>{row.location}</td>
            <td className='flex-indicator'>{row.service_center}</td>
          </>
        )}
      </Table>
    </div>
  )
}

export default LinkedCards
