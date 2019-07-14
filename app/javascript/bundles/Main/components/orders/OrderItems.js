import PropTypes from 'prop-types'
import React from 'react'
import { Table } from 'reactstrap'
import OrderItemsHeader from './OrderItemsHeader'
import OrderItem from './OrderItem'
import OrderItemsSum from './Containers/OrderItemsSum'

const OrderItems = ({
    fields,
    meta: {
        touched,
        error
    }
}) => {
    return <Table size="sm" responsive bordered hover>
        <OrderItemsHeader fields={fields}/>
        <OrderItemsSum/>
        <tbody>
            {fields.map((order_item_name, index) => <OrderItem
                key={index}
                order_item_name={order_item_name}
                fields={fields}
                index={index}
            />)}
        </tbody>
    </Table>
}

OrderItems.propTypes = {
    fields: PropTypes.object,
    meta: PropTypes.shape({touched: PropTypes.bool, error: PropTypes.string})
}

OrderItems.defaultProps = {
    fields: []
}

export default OrderItems
