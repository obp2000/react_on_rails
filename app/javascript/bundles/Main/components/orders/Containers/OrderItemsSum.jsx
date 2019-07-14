import {connect} from 'react-redux'
import OrderItemsSum from '../OrderItemsSum'

import {OrderItemsSumSelector} from '../Selectors'

const mapStateToProps = (state) => {
    return OrderItemsSumSelector(state)
}

export default connect(mapStateToProps)(OrderItemsSum)
