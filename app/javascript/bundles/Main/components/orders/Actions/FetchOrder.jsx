import {connect} from 'react-redux'
import {fetchOrderIfNeeded} from '../../redux/Orders'
import Component from '../Components/Order'

const mapDispatchToProps = (dispatch, {
    match: {
        params: {
            id
        }
    }
}) => {
    return {fetchOrder: () => dispatch(fetchOrderIfNeeded(id))}
}

export default connect(null, mapDispatchToProps)(Component)
