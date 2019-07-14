import {connect} from 'react-redux'
import Customers from '../Components/Customers'
import {fetchCustomersIfNeeded} from '../../redux/Customers'

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
    fetchCustomers: (currentPage = page, currentTerm = term) => dispatch(fetchCustomersIfNeeded(currentPage, currentTerm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Customers)