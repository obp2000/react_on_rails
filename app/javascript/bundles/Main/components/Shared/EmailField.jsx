import PropTypes from 'prop-types'
import React from 'react'
import {Field} from 'redux-form'
import renderField from '../RenderField'

const EmailField = ({name, label, readOnly, required}) => {
  return <Field
    name={name}
    type="email"
    component={renderField}
    required={required}
    className="validate"/>
}

EmailField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  readOnly: PropTypes.bool
}

export default EmailField