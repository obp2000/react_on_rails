import {Field} from 'redux-form'
import {connect} from 'react-redux'
import component from '../../renderCombobox'
import {searchCustomers} from '../../redux/Customers'

const mapStateToProps = ({
  customers: {
    search_customers: data
  }
}) => {
  const name = 'customer'
  const textField = 'nick'
  const defaultValue = {}
  return {data, name, component, textField, defaultValue}
}

const mapDispatchToProps = dispatch => {
  const onChange = (obj, value) => {
    if (value) {
      dispatch(searchCustomers(value))
    }
  }
  return {onChange}
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
