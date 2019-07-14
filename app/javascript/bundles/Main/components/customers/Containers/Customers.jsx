import {connect} from 'react-redux'
import Customers from '../Customers'

const mapStateToProps = ({
  customers: {
    customers,
    totalCount,
    isFetching
  }
}) => {
  return {customers, totalCount, isFetching}
}

export default connect(mapStateToProps)(Customers)

