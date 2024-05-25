import React from 'react'
import ReactApexChart from 'react-apexcharts'
import PropTypes from 'prop-types'

const MonthlyStatementBarChart = ({ title }) => {
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'] // Example categories
  const data1 = [44, 55, 41, 67] // Example data for series 1
  const data2 = [76, 85, 101, 98]
  const options = {
    chart: {
      id: 'bar-chart',
    },
    xaxis: {
      categories: categories,
    },
    legend: {
      position: 'top',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
      },
    },
  }

  const series = [
    {
      name: 'Series 1',
      data: data1,
    },
    {
      name: 'Series 2',
      data: data2,
    },
  ]

  return (
    <div className='bottom-chart'>
      <div>
        <div className='card'>
          <h6>{title}</h6>
          <ReactApexChart
            options={options}
            series={series}
            type='bar'
            height={350}
          />
        </div>
      </div>
    </div>
  )
}

MonthlyStatementBarChart.propTypes = {
  title: PropTypes.string,
}

export default MonthlyStatementBarChart
