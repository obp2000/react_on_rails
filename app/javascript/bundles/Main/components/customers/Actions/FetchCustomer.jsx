import {connect} from 'react-redux'
import {fetchCustomerIfNeeded} from '../../redux/Customers'
import Component from '../Components/Customer'

const mapDispatchToProps = (dispatch, {
    match: {
        params: {
            id
        }
    }
}) => {
    return {
        fetchCustomer: () => dispatch(fetchCustomerIfNeeded(id))
    }
}

export default connect(null, mapDispatchToProps)(Component)
