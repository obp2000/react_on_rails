import PropTypes from 'prop-types';
import React from 'react';

export default class NewOrderFooter extends React.Component {
    get orderItemsAmount() {
        if (this.props.order_items.length > 0) {
          return this.props.order_items
            .filter(order_item => !order_item._destroy)
            .map(order_item => 1)
            .reduce((sum, curr) => sum + curr);
        }
    };
    get orderWeight() {
        if (this.props.order_items.length > 0) {
          return this.props.order_items
            .filter(order_item => !order_item._destroy)
            .map(
              order_item =>
                order_item.amount *
                order_item.product.density *
                order_item.product.width / 100
            )
            .reduce((sum, curr) => sum + curr).toFixed(0);
        }
    };
    get orderSum() {
        if (this.props.order_items.length > 0) {
          return this.props.order_items
            .filter(order_item => !order_item._destroy)
            .map(
              order_item =>
                order_item.amount * order_item.price
            )
            .reduce((sum, curr) => sum + curr);
        }
    };
    get orderMeters() {
        if (this.props.order_items.length > 0) {
          return this.props.order_items
            .filter(order_item => !order_item._destroy)
            .map(order_item => 1 * order_item.amount)
            .reduce((sum, curr) => sum + curr);
        }
    };
    render() {
        return (
            <div className='row'>
                <div className="col-sm-1">
                    <div>{this.orderItemsAmount}</div>
                </div>
                <div className="col-sm-4">
                    {/* <button onClick={this.props.addOrderItem} type="button" className="btn btn-outline-primary btn-sm">Добавить</button> */}
                </div>
                <div className="col-sm-1 offset-sm-3">
                    <div>{this.orderMeters}</div>
                </div>
                <div className="col-sm-1">
                    <div>{this.orderSum}</div>
                </div>
                <div className="col-sm-1">
                    <div>{this.orderWeight}</div>
                </div>
            </div>
        );
    }
};
