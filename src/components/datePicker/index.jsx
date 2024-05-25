import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './datePicker.scss'
import PropTypes from 'prop-types'

const DatePickerInput = ({ startDate, endDate }) => {
  return (
    <div className='container'>
      <DatePicker
        placeholderText='Min date - Max date'
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
      />
      <div className='input-group-append'>
        <button className='btn btn--primary' type='submit'>
          <i className='fa fa-search'></i>
        </button>
      </div>
    </div>
  )
}

DatePickerInput.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
}

export default DatePickerInput
