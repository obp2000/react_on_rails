import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {push, goBack} from 'connected-react-router'
import {Button} from 'reactstrap'

const BackButton = ({goBack}) => {
  return <Button color="primary" outline size="sm" onClick={goBack}>Назад</Button>
}

BackButton.propTypes = {
  goBack: PropTypes.func.isRequired
}

export default connect(null, {goBack})(BackButton)
