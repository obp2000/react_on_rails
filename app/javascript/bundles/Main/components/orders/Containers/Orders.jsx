import {connect} from 'react-redux'
import Orders from '../Orders'

const mapStateToProps = ({
    orders: {
        orders,
        totalCount,
        isFetching
    }
}) => {
    return {orders, totalCount, isFetching}
}

export default connect(mapStateToProps)(Orders)