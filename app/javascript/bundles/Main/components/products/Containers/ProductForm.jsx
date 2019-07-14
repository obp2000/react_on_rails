import {reduxForm} from 'redux-form'
import {push} from 'connected-react-router'
import {updateProduct} from '../../redux/Products'
import ProductForm from '../ProductForm'

const validate = values => {
    const errors = {}
    const blankErrorText = 'Не может быть пустым!'
    if (!values.name) {
        errors.name = blankErrorText
    }
    if (!values.price) {
        errors.price = blankErrorText
    }
    return errors
}

const onSubmit = (values, dispatch, props) => {
    dispatch(updateProduct(values))
}

const onSubmitSuccess = (result, dispatch, props) => {
    dispatch(push('/products'))
}

export default reduxForm({form: 'product', validate, onSubmit, onSubmitSuccess, enableReinitialize: true})(ProductForm)