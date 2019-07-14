import {push} from 'connected-react-router'
import {reduxForm} from 'redux-form'
import {authenticate} from '../../redux/auth'
import {closeModal} from '../../redux/NavBar'
import LoginForm from '../LoginForm'

const validate = ({email, password}) => {
    const errors = {}
    if (!email) {
        errors.email = 'Email не может быть пустым!'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Недопустимый email!'
    }
    if (!password) 
        errors.password = 'Пароль не может быть пустым!'
    return errors
}

const onSubmit = (values, dispatch, props) => {
    return dispatch(authenticate(values))
}

const onSubmitSuccess = (result, dispatch, props) => {
    dispatch(closeModal())
    dispatch(push('/profile'))
}

export default reduxForm({form: 'Login', validate, onSubmit, onSubmitSuccess})(LoginForm)
