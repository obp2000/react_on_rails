import {connect} from 'react-redux'
import Customer from './CustomerForm'

const mapStateToProps = ({customers: {
        customer: initialValues
    }}) => {
    return {initialValues}
}

export default connect(mapStateToProps)(Customer)
