import PropTypes from 'prop-types'
import React from 'react'
import {FieldArray} from 'redux-form'
import {Form} from 'reactstrap'
import Loading from '../Loading'
import SubmitButton from '../Shared/SubmitButton'
import BackButton from '../Shared/BackButton'

import OrderNumber from './Containers/OrderNumber'
import Customer from './Containers/Customer'
import OrderItems from './OrderItems'
import OrderPostal from './Containers/OrderPostal'

const OrderForm = ({
    submitting,
    invalid,
    pristine,
    handleSubmit,
    onSubmit,
    isFetching
}) => {
    return isFetching ? <Loading/> : <Form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
        <br/>
        <div className='row'>
            <div className="col-sm-6">
                <h4>Заказ&nbsp;
                    <OrderNumber/>
                </h4>
            </div>
            <div className="col-sm-6 text-right">
                <BackButton/>
                &nbsp;
                <SubmitButton submitDisabled={submitting || invalid || pristine}/>
            </div>
        </div>
        <Customer/>
        <FieldArray name="order_items" component={OrderItems}/>
        <OrderPostal/>
        <hr/>
    </Form>
}

OrderForm.propTypes = {
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func
}

export default OrderForm
