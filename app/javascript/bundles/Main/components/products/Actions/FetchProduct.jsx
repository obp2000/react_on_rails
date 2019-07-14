import {connect} from 'react-redux'
import {fetchProductIfNeeded} from '../../redux/Products'
import Component from '../Components/Product'

const mapDispatchToProps = (dispatch, {
    match: {
        params: {
            id
        }
    }
}) => {
    return {
        fetchProduct: () => dispatch(fetchProductIfNeeded(id))
    }
}

export default connect(null, mapDispatchToProps)(Component)
