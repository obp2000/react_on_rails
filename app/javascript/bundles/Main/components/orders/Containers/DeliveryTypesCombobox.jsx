import {Field} from 'redux-form'
import {connect} from 'react-redux'
import component from '../../renderCombobox'

const mapStateToProps = ({orders: {
        order
    }}) => {
    const {delivery_types: data} = (order || {})
    const name = 'delivery_type'
    return {data, name, component}
}

export default connect(mapStateToProps)(Field)