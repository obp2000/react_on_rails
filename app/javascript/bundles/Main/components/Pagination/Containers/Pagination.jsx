import {connect} from 'react-redux'
import Pagination from '../Pagination'

function mapStateToProps(state, {
    match: {
        params: {
            page = '1'
        }
    }
}) {
    const {
        router: {
            location: {
                pathname,
                search
            }
        }
    } = state
    const base = pathname.replace(/\/pages\/\d+$/gi, '')
    const table = base.replace(/^\//gi, '')
    const {totalPages} = state[table]
    return {base, page, totalPages, search}
}

export default connect(mapStateToProps)(Pagination)
