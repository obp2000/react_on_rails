import {connect} from 'react-redux'
import {formValueSelector} from 'redux-form'
import Customer from '../Customer'

const mapStateToProps = (state) => {
    const customer = formValueSelector('order')(state, 'customer')
    return customer
}

export default connect(mapStateToProps)(Customer)