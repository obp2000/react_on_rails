import {reduxForm} from 'redux-form'
import {push} from 'connected-react-router'
import {updateOrder} from '../../redux/Orders'
import OrderForm from '../OrderForm'

const validate = ({customer}) => {
    const errors = {}
    const blankErrorText = 'Не может быть пустым!'
    if (!customer) {
        errors.customer = blankErrorText
    }
    return errors
}

const onSubmit = (values, dispatch, props) => {
    dispatch(updateOrder(values))
}

const onSubmitSuccess = (result, dispatch, props) => {
    dispatch(push('/orders'))
}

export default reduxForm({form: 'order', validate, onSubmit, onSubmitSuccess, enableReinitialize: true})(OrderForm)
