import {Field} from 'redux-form'
import {connect} from 'react-redux'
import component from '../../renderCombobox'
import {searchCities} from '../../redux/Customers'
import ChangeAction from '../../Shared/ChangeAction'
import SelectAction from '../../Shared/SelectAction'
import {change} from 'redux-form'

const mapStateToProps = ({
  customers: {
    search_cities: data
  }
}) => {
  const name = 'city'
  const textField = 'city'
  return {data, name, component, textField}
}

const mapDispatchToProps = dispatch => {
  const changeAction = (value) => dispatch(searchCities(value))
  const selectAction = (value) => dispatch(change('customer', 'pindex', value))
  return {
    onChange: ChangeAction(changeAction),
    onSelect: SelectAction(selectAction, 'pindex')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
