import {connect} from 'react-redux'
import {change, touch} from 'redux-form'
import DeleteButton from '../../Shared/DeleteButton'
import ConfirmAction from '../../Shared/ConfirmAction'

const mapDispatchToProps = (dispatch, {order_item_name, fields, index}) => {
    const action = () => {
        const {id} = fields.get(index)
        if (id) {
            dispatch(change('order', `${order_item_name}._destroy`, true))
            dispatch(touch('order', `${order_item_name}._destroy`))
        } else {
            fields.remove(index)
        }
    }
    return {
        handleDelete: ConfirmAction(action, "Удалить?")
    }
}

export default connect(null, mapDispatchToProps)(DeleteButton)
