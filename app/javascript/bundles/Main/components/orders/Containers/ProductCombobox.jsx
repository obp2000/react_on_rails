import {Field, change} from 'redux-form'
import {connect} from 'react-redux'
import component from '../../renderCombobox'
import {searchProducts} from '../../redux/Products'

const mapStateToProps = ({
  products: {
    search_products: data
  }
}, {order_item_name}) => {
  const name = `${order_item_name}.product`
  const textField = 'name'
  const inputProps = {
    style: {
      fontSize: "14px"
    }
  }
  return {data, name, component, textField, inputProps}
}

const mapDispatchToProps = (dispatch, {order_item_name}) => {
  const onChange = ({
    price
  }, value) => {
    if (price) {
      dispatch(change('order', `${order_item_name}.price`, price))
    } else if (value) {
      dispatch(searchProducts(value))
    }
  }
  return {onChange}
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
