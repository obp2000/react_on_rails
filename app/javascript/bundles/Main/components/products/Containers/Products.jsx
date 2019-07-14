import {connect} from 'react-redux'
import Render from '../Products'

const mapStateToProps = ({
  products: {
    products,
    totalCount,
    isFetching
  }
}) => {
  return {products, totalCount, isFetching}
}

export default connect(mapStateToProps)(Render)

