import {push} from 'connected-react-router'
import {reduxForm} from 'redux-form'
import {authenticate, register} from '../../redux/auth'
import {closeModal} from '../../redux/NavBar'
import RegisterForm from '../RegisterForm'

const validate = ({email, password, passwordConfirmation}) => {
    const errors = {}
    if (!email) {
        errors.email = 'Email не может быть пустым!'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Недопустимый email!'
    }
    if (!password) {
        errors.password = 'Пароль не может быть пустым!'
    } else if (password.length < 8) {
        errors.password = 'Пароль должен быть не менее 8 символов!'
    }
    if (password != passwordConfirmation) {
        errors.passwordConfirmation = 'Подтверждение пароля не совпадает с паролем!'
    }
    return errors
}

const onSubmit = (values, dispatch, props) => {
    return dispatch(register(values))
}

const onSubmitSuccess = (result, dispatch, props) => {
    // dispatch(authenticate(result))
    alert('Успешно зарегистрировались!')
    dispatch(closeModal())
    // dispatch(push('/profile'))
}

export default reduxForm({form: 'Register', validate, onSubmit, onSubmitSuccess})(RegisterForm)


// export default connect(({auth}) => auth, {closeModal, push})(Register)