import {connect} from 'react-redux'
import Products from '../Components/Products'
import {fetchProductsIfNeeded} from '../../redux/Products'

// const mapDispatchToProps = (dispatch, {     match: {         params: {
//      page = '1'         }     } }) => {     return {         fetchProducts:
// (currentPage = page) => dispatch(fetchProductsIfNeeded(currentPage))     } }
// export default connect(null, mapDispatchToProps)(Component)

function mapStateToProps({
    router: {
        location: {
            search
        }
    }
}) {
    return {search}
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

const mergeProps = ({
    search
}, {
    dispatch
}, {
    match: {
        params: {
            page = '1'
        }
    }
}) => {
    const searchParams = new URLSearchParams(search)
    const term = searchParams.get('term') || ''
    return {
        fetchProducts: (currentPage = page, currentTerm = term) => dispatch(fetchProductsIfNeeded(currentPage, currentTerm))
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Products)
