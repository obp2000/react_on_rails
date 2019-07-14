import {reduxForm} from 'redux-form'
import {push} from 'connected-react-router'
import {updateCustomer} from '../../redux/Customers'
import CustomerForm from '../CustomerForm'
// import {createValidator, required} from '../../formValidations'

const validate = ({nick, name}) => {
    const errors = {}
    const blankErrorText = 'Не может быть пустым!'
    if (!nick) {
        errors.nick = blankErrorText
    }
    if (!name) {
        errors.name = blankErrorText
    }
    return errors
}

const onSubmit = (values, dispatch, props) => {
    dispatch(updateCustomer(values))
}

const onSubmitSuccess = (result, dispatch, props) => {
    dispatch(push('/customers'))
}

export default reduxForm({
    form: 'customer',
    validate,
    onSubmit,
    onSubmitSuccess,
    enableReinitialize: true
})(CustomerForm)
