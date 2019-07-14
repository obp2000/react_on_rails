import {connect} from 'react-redux'
import {DensityForCountSelector} from '../Selectors'
import {MetersInRollSelector} from '../Selectors'
import ProductForm from './ProductForm'

const mapStateToProps = (state) => {
    const {products: {
            product,
            isFetching
        }} = state
    const {image_url} = (product || {})
    const density_for_count = DensityForCountSelector(state)
    const meters_in_roll = MetersInRollSelector(state)
    return {initialValues: product, isFetching, image_url, density_for_count, meters_in_roll}
}

export default connect(mapStateToProps)(ProductForm)
