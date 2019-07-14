import PropTypes from 'prop-types'
import React from 'react'
import {Field} from 'redux-form'
import FieldFileInput from '../FieldFileInput'

const FileField = ({name, label, readOnly}) => {
  return <Field
    name={name}
    type="file"
    label={label}
    component={FieldFileInput}
    readOnly={readOnly}
    className="form-control-file"/>
}

FileField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  readOnly: PropTypes.bool
}

export default FileField