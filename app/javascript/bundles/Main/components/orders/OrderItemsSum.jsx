import React from 'react'
import PropTypes from 'prop-types'

const OrderItemsSum = ({count, amount, cost, weight}) => {
    return <tfoot className="thead-light">
        <tr className="d-flex">
            <td scope="col" className="col-1">{count}</td>
            <td scope="col" className="col-6">Итого</td>
            <td scope="col" className="col-1"></td>
            <td scope="col" className="col-1 text-right">{amount.toFixed(2)}</td>
            <td scope="col" className="col-1 text-right"><strong>{cost}</strong></td>
            <td scope="col" className="col-1 text-right">{weight.toFixed(0)}</td>
            <td scope="col" className="col-1">
                {/* <button
            onClick={() => fields.push({})}
            type="button"
            className="btn btn-outline-primary btn-sm">Добавить</button> */}
            </td>
        </tr>
    </tfoot>
}

OrderItemsSum.propTypes = {
    count: PropTypes.number,
    amount: PropTypes.number,
    cost: PropTypes.number,
    weight: PropTypes.number
}

OrderItemsSum.defaultProps = {
    count: 0,
    amount: 0,
    cost: 0,
    weight: 0
}

export default OrderItemsSum