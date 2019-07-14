import {connect} from 'react-redux'
import {change} from 'redux-form'
import RenderOrderItem from '../RenderOrderItem'

const mapDispatchToProps = dispatch => {
    const onRemoveOrderItem = (order_item_name, fields, index) => {
        if (confirm("Удалить?")) {
            const {id} = fields.get(index)
            if (id) {
                dispatch(change('order', `${order_item_name}._destroy`, true))
                // touch(`${order_item_name}._destroy`)
            } else {
                fields.remove(index)
            }
        }
    }
    return {onRemoveOrderItem}
}

export default connect(null, mapDispatchToProps)(RenderOrderItem)
