import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

export default class OrdersHead extends React.Component {
    render() {
        return (
            <thead className="thead-light">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Заказчик</th>
                    <th scope="col">Сумма</th>
                    <th scope="col">Создана</th>
                    <th scope="col">Изменена</th>
                    <th scope="col">
                        <Link to="/orders/new" className="btn btn-outline-primary btn-sm">Новый</Link>
                    </th>
                    <th scope="col"></th>
                </tr>
            </thead>
        );
    }
};
