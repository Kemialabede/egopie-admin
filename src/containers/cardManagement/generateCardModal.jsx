import React from 'react'
import Modal from '../../components/modal'
import { Formik } from 'formik'
import Input from '../../components/input'
import Select from '../../components/select'
import PropTypes from 'prop-types'

const GenerateCardModal = ({ isShown, setIsShown }) => {
  return (
    <Modal
      isShown={isShown}
      setIsShown={setIsShown}
      title='Generate Card'
      buttonText='Generate'
    >
      <Formik>
        {() => (
          <div>
            <Select title='Location Name' />
            <br />
            <Select title='Service center' />
            <br />
            <Input type='number' title='Number of Card' />
          </div>
        )}
      </Formik>
    </Modal>
  )
}

GenerateCardModal.propTypes = {
  isShown: PropTypes.bool,
  setIsShown: PropTypes.func,
}
export default GenerateCardModal
