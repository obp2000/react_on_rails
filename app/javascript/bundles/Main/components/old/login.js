import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {reduxForm, formValueSelector} from 'redux-form'
import {authenticate} from '../redux/auth'
import RenderLogin from '../RenderLogin'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = () => {
    const {email, password, authenticate} = this.props
    authenticate(email, password)
  }

  render() {
    const {isAuthenticated, error} = this.props
    if (isAuthenticated) {
      return <Redirect to="/"/>
    }
    const {handleSubmit} = this
    const errors = (error && error.response.data.errors)
    const props = {
      handleSubmit,
      errors
    }
    return <RenderLogin {...props}/>
  }
}

const validate = ({email, password}) => {
  const errors = {}
  const blankErrorText = 'Не может быть пустым!'
  if (!email) 
    errors.email = blankErrorText
  if (!password) 
    errors.password = blankErrorText
  return errors
}

Login = reduxForm({form: 'login', validate, enableReinitialize: true})(Login)

function mapStateToProps(state) {
  const {email, password} = formValueSelector('login')(state, 'email', 'password')
  const {
    auth: {
      loading,
      isAuthenticated,
      error
    }
  } = state
  return {loading, isAuthenticated, error, email, password}
}

export default connect(mapStateToProps, {authenticate})(Login)
