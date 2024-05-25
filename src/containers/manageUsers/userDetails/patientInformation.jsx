import React from 'react'
import './userDetails.scss'
import { Formik } from 'formik'
import Input from '../../../components/input'
import Select from '../../../components/select'
import Button from '../../../components/button'
import ActivityStatus from './activityStatus'

const PatientInformation = () => {
  return (
    <div className='patient_info'>
      <h5>Information of change new</h5>
      <Formik>
        {() => (
          <div>
            <div className='patient_info__form'>
              <div>
                <Input title='First Name' />
              </div>
              <div>
                <Input title='Last Name' />
              </div>
              <div>
                <Input title='Email' />
              </div>
              <div>
                <Input title='Mobile Number' />
              </div>
              <div>
                <Select title='Country' />
              </div>
              <div>
                <Input title='City' />
              </div>
              <div style={{ flex: '1 0 100%' }}>
                <Input title='Address' />
              </div>
              <div>
                <Input title='Zip/Postal' />
              </div>
              <div></div>
            </div>
            <ActivityStatus />
            <div className='patient_info__form__button'>
              <Button theme='primary' size='sm'>
                Save Changes
              </Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default PatientInformation
