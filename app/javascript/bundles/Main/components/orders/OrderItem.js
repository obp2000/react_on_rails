import PropTypes from 'prop-types'
import React from 'react'
import {Field} from 'redux-form'
import ProductCombobox from './Containers/ProductCombobox'
import renderField from '../RenderField'
import DeleteOrderItemButton from './Containers/DeleteOrderItemButton'

const OrderItem = ({index, order_item_name, fields}) => {
    const {
        amount = 0,
        price = 0,
        _destroy = false,
        product: {
            id: product_id,
            price: product_price,
            density: product_density = 0,
            width: product_width = 0
        } = {}
    } = fields.get(index)
    return <tr className={((_destroy == true)
        ? 'd-none'
        : 'd-flex')}>
        <th scope="row" className="col-sm-1">{index + 1}</th>
        <td className="col-sm-6">
            <ProductCombobox order_item_name={order_item_name}/>
        </td>
        <td className="col-sm-1"><Field
            name={`${order_item_name}.price`}
            type="number"
            component={renderField}
            label="Цена"
            className="form-control"/>
        </td>
        <td className="col-sm-1"><Field
            name={`${order_item_name}.amount`}
            type="number"
            step="0.1"
            component={renderField}
            label="Количество"
            className="form-control"/>
        </td>
        <td className="col-sm-1 text-right">{price * amount}
        </td>
        <td className="col-sm-1 text-right">
            {(amount * product_density * product_width / 100).toFixed(0)}
        </td>
        <td className="col-sm-1">
            <DeleteOrderItemButton
                order_item_name={order_item_name}
                fields={fields}
                index={index}/>
        </td>
    </tr>
}

OrderItem.propTypes = {
    index: PropTypes.number,
    order_item_name: PropTypes.string,
    fields: PropTypes.object
}

OrderItem.defaultProps = {
    fields: []
}

export default OrderItem
