import {connect} from 'react-redux'
import OrderForm from './OrderForm'

const mapStateToProps = ({
    orders: {
        order,
        isFetching
    }
}) => {
    return {
        initialValues: (order || {}),
        isFetching
    }
}

export default connect(mapStateToProps)(OrderForm)
