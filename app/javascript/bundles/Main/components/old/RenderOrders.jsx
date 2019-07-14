import PropTypes from 'prop-types';
import React from 'react';
import OrdersHead from './OrdersHead';
import Order from './Order';
import Loading from '../Loading';

const RenderOrders = ({orders, totalCount, isFetching, handleDelete}) => {
    return <div>
        <h3>Заказы ({totalCount})</h3>
        <table className="table table-sm table-striped table-bordered table-hover">
            <OrdersHead/>
            <tbody>
                {!isFetching
                    ? orders.map((order) => {
                        return <Order
                            order={order}
                            key={order.id}
                            handleDelete={handleDelete.bind(this, order.id)}/>
                    })
                    : <Loading/>
                }
            </tbody>
        </table>
    </div>
}

export default RenderOrders
