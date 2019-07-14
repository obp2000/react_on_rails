import PropTypes from 'prop-types';
import React from 'react';

const OrderItemsHeader = () => {
    return <div className="row">
        <div className="col-sm-1">
            <label>№ п/п</label>
        </div>
        <div className="col-sm-6">
            <label>Наименование</label>
        </div>
        <div className="col-sm-1">
            <label>Цена, руб.</label>
        </div>
        <div className="col-sm-1">
            <label>Метраж</label>
        </div>
        <div className="col-sm-1">
            <label>Стоимость, руб.</label>
        </div>
        <div className="col-sm-1">
            <label>Вес, гр.</label>
        </div>
        <div className="col-sm-1"></div>
    </div>
}

export default OrderItemsHeader
