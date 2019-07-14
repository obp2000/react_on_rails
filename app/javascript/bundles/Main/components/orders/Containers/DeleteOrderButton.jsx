import {connect} from 'react-redux'
import DeleteButton from '../../Shared/DeleteButton'
import {deleteOrder} from '../../redux/Orders'
import ConfirmAction from '../../Shared/ConfirmAction'

const mapDispatchToProps = (dispatch, {id}) => {
    const action = () => dispatch(deleteOrder(id))
    return {
        handleDelete: ConfirmAction(action, "Удалить?")
    }
}


export default connect(null, mapDispatchToProps)(DeleteButton)
