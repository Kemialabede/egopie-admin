import React from 'react'
import Modal from '../../components/modal'
import { Formik } from 'formik'
import Select from '../../components/select'
import PropTypes from 'prop-types'

const LinkedCardModal = ({ isShown, setIsShown }) => {
  return (
    <Modal
      isShown={isShown}
      setIsShown={setIsShown}
      title='Link Card'
      buttonText='Link Card'
    >
      <Formik>
        {() => (
          <div>
            <Select title='Location Name' />
            <br />
            <Select title='Service center' />
            <br />
            <Select title='Card' />
            <br />
            <Select title='Card Serial Number' />
          </div>
        )}
      </Formik>
    </Modal>
  )
}

LinkedCardModal.propTypes = {
  isShown: PropTypes.bool,
  setIsShown: PropTypes.func,
}

export default LinkedCardModal
