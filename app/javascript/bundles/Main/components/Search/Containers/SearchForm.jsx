import {reduxForm} from 'redux-form'
import {push} from 'connected-react-router'
import SearchForm from '../SearchForm'

const validate = ({term}) => {
    const errors = {}
    const blankErrorText = ''
    if (!term) {
        errors.term = blankErrorText
    }
    return errors
}

const onSubmit = ({
    term
}, dispatch, {table}) => {
    console.log('table: ', table)
    // dispatch(fetchCustomersIfNeeded(null, term))
    // dispatch(push(`/customers?term=${term}`))
    switch (table) {
        case 'customers':
            dispatch(push(`/customers?term=${term}`))
            break
        case 'products':
            dispatch(push(`/products?term=${term}`))
            break
    }
}

const onSubmitSuccess = (result, dispatch, props) => {
    // dispatch(push('/customers')) alert('onSubmitSuccess')
}

export default reduxForm({form: 'search', validate, onSubmit})(SearchForm)
