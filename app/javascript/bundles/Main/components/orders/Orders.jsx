import PropTypes from 'prop-types'
import React from 'react'
import OrdersHeader from './OrdersHeader'
import Order from './Order'
import Loading from '../Loading'

const Orders = ({
    orders,
    totalCount,
    isFetching,
}) => {
    return <div>
        <h3>Заказы ({totalCount})</h3>
        <table className="table table-sm table-striped table-bordered table-hover">
            <OrdersHeader/>
            <tbody>
                {!isFetching
                    ? orders.map((order) => {
                        return <Order
                            {...order}
                            key={order.id}
                            />
                    })
                    : <Loading/>}
            </tbody>
        </table>
    </div>
}

Orders.propTypes = {
    orders: PropTypes.array.isRequired,
    totalCount: PropTypes.number,
    isFetching: PropTypes.bool,
}

Orders.defaultProps = {
    orders: [],
}

export default Orders