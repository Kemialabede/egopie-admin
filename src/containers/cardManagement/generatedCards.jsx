import React from 'react'
import Table from '../../components/table'
import {
  generatedCardData,
  generatedCardsHeader,
} from '../../mocks/cardManagement'
import Indicator from '../../components/indicators'

const GeneratedCards = () => {
  return (
    <div>
      <Table tableHeaders={generatedCardsHeader} tableData={generatedCardData}>
        {(row, index) => (
          <>
            <td>{index + 1}</td>
            <td>{row.card_no}</td>
            <td>{row.location}</td>
            <td>{row.service_center}</td>
            <td className='flex-indicator'>
              <Indicator status='delete' statusIndicator='delete' />
            </td>
          </>
        )}
      </Table>
    </div>
  )
}

export default GeneratedCards
