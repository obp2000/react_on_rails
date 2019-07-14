import {connect} from 'react-redux'
import DeleteButton from '../../Shared/DeleteButton'
import {deleteCustomer} from '../../redux/Customers'
import ConfirmAction from '../../Shared/ConfirmAction'

const mapDispatchToProps = (dispatch, {id}) => {
    const action = () => dispatch(deleteCustomer(id))
    return {
        handleDelete: ConfirmAction(action, "Удалить?")
    }
}

export default connect(null, mapDispatchToProps)(DeleteButton)
