import React from 'react'
import Table from '../../components/table'
import {
  allUserCardsData,
  allUserCardsHeader,
} from '../../mocks/cardManagement'
import Indicator from '../../components/indicators'

const AllUserCards = () => {
  return (
    <div>
      <Table tableHeaders={allUserCardsHeader} tableData={allUserCardsData}>
        {(row, index) => (
          <>
            <td>{index + 1}</td>
            <td>{row.username}</td>
            <td>{row.card_no}</td>
            <td>{row.serial_no}</td>
            <td>{row.location}</td>
            <td>{row.service_center}</td>
            <td className='flex-indicator'>
              <Indicator status='active' statusIndicator='active' />
            </td>
          </>
        )}
      </Table>
    </div>
  )
}

export default AllUserCards
