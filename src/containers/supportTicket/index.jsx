import React, { useState } from 'react'
import getPageTitle from '../../utilities/getPageTitle'
import Tabs from '../../components/tabs'
import Table from '../../components/table'
import { supportTicketHeader } from '../../mocks/supportTicket'
import Layout from '../../components/layout'

const tabs = [
  {
    id: 1,
    label: 'All Tickets',
  },
  {
    id: 2,
    label: 'Pending Tickets',
  },
  {
    id: 3,
    label: 'Closed Tickets',
  },
  {
    id: 4,
    label: 'Answered Tickets',
  },
]

const SupportTicket = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  return (
    <Layout>
      <div className='page-heading'>
        <h6>{getPageTitle(activeTab?.label)}</h6>
      </div>
      <Tabs tabs={tabs} setActive={setActiveTab} active={activeTab} />
      <Table tableHeaders={supportTicketHeader} tableData={[]} />
    </Layout>
  )
}

export default SupportTicket
