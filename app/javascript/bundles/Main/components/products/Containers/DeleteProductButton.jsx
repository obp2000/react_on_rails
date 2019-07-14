import {connect} from 'react-redux'
import DeleteButton from '../../Shared/DeleteButton'
import {deleteProduct} from '../../redux/Products'
import ConfirmAction from '../../Shared/ConfirmAction'

const mapDispatchToProps = (dispatch, {id}) => {
    const action = () => dispatch(deleteProduct(id))
    return {
        handleDelete: ConfirmAction(action, "Удалить?")
    }
}

export default connect(null, mapDispatchToProps)(DeleteButton)
