import PropTypes from 'prop-types'
import React from 'react'

const OrderItemsHeader = ({fields}) => {
    return <thead className="thead-light">
        <tr className="d-flex">
            <th scope="col" className="col-1">№ п/п</th>
            <th scope="col" className="col-6">Наименование</th>
            <th scope="col" className="col-1">Цена, руб.</th>
            <th scope="col" className="col-1">Метраж</th>
            <th scope="col" className="col-1">Стоимость, руб.</th>
            <th scope="col" className="col-1">Вес, гр.</th>
            <th scope="col" className="col-1">
                <button
                    onClick={() => fields.push({})}
                    type="button"
                    className="btn btn-outline-primary btn-sm">Добавить</button>
            </th>
        </tr>
    </thead>
}

OrderItemsHeader.propTypes = {
    fields: PropTypes.object
}

OrderItemsHeader.defaultProps = {
    fields: []
}

export default OrderItemsHeader