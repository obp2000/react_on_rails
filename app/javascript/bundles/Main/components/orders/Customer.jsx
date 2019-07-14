import PropTypes from 'prop-types'
import React from 'react'
import TextField from '../Shared/TextField'
import CustomerCombobox from './Containers/CustomerCombobox'
import DeliveryTypesCombobox from './Containers/DeliveryTypesCombobox'

const Customer = ({pindex, city, address}) => {
    return <div>
        <div className="form-group row">
            <label className="col-sm-1 col-form-label">Заказчик:</label>
            <div className="col-sm-7">
                <CustomerCombobox/>
            </div>
        </div>
        <div className="form-group row">
            <div className="col-sm-1 col-form-label">
                Адрес:
            </div>
            <div className="col-sm-7">
                {address}
            </div>
            <div className="col-sm-4">
                Индекс: {pindex}
                / {city}
            </div>
        </div>
        <div className="form-group row">
            <div className="col-sm-1 col-form-label">
                Доставка:
            </div>
            <div className="col-sm-2">
                <DeliveryTypesCombobox/>
            </div>
            <div className="col-sm-6">
                <TextField name="address" label="Адрес доставки"/>
            </div>
        </div>
    </div>
}

Customer.propTypes = {
    pindex: PropTypes.string,
    city: PropTypes.string,
    address: PropTypes.string
}

Customer.defaultProps = {
    pindex: '',
    city: '',
    address: ''
}

export default Customer