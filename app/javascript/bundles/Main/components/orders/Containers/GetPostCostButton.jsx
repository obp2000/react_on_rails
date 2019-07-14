import {connect} from 'react-redux'
import {getPostCost} from '../../redux/Orders'
import GetPostCostButton from '../GetPostCostButton'

const mapDispatchToProps = (dispatch, {tolalWeight}) => {
    const _getPostCost = () => dispatch(getPostCost(tolalWeight))
    return {getPostCost: _getPostCost}
}

export default connect(null, mapDispatchToProps)(GetPostCostButton)
