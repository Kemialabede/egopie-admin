import React from 'react'
import AggregateCount from './aggregateCount'
import Layout from '../../components/layout'
import MonthlyStatementBarChart from './monthlyStatementBarChart'
import DepositCount from './depositCount'
import getPageTitle from '../../utilities/getPageTitle'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation()
  return (
    <Layout>
      <div className='page-heading'>
        <h6>{getPageTitle(location.pathname)}</h6>
      </div>
      <AggregateCount />
      <div className='chart-container'>
        <MonthlyStatementBarChart title='Monthly Deposit & Card Request' />
        <DepositCount />
      </div>
      <MonthlyStatementBarChart title='Transaction History' />
    </Layout>
  )
}

export default Dashboard
