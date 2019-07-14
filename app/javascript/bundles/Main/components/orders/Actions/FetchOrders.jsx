import {connect} from 'react-redux'
import Component from '../Components/Orders'
import {fetchOrdersIfNeeded} from '../../redux/Orders'

const mapDispatchToProps = (dispatch, {
    match: {
        params: {
            page = '1'
        }
    }
}) => {
    const fetchOrders = (currentPage = page) => dispatch(fetchOrdersIfNeeded(currentPage))
    return {fetchOrders}
}

export default connect(null, mapDispatchToProps)(Component)
