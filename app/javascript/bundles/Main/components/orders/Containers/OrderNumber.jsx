import {connect} from 'react-redux'
import OrderNumber from '../OrderNumber'

const mapStateToProps = ({
    orders: {
        order,
        isFetching
    }
}) => {
    const {id, created_at} = (order || {})
    return {id, created_at, isFetching}
}

export default connect(mapStateToProps)(OrderNumber)