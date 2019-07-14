import PropTypes from 'prop-types'
import React from 'react'
import {Form} from 'redux-form'
import SubmitButton from '../Shared/SubmitButton'
import BackButton from '../Shared/BackButton'
import TextField from '../Shared/TextField'
import FormRow from './FormRow'
import CityCombobox from './Containers/CityCombobox'

const CustomerForm = ({handleSubmit, onSubmit, submitting, invalid, pristine}) => {
    return <Form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
        <h4>Покупатель</h4>
        <div className="col-sm-12 text-right">
            <BackButton/>
            &nbsp;
            <SubmitButton submitDisabled={submitting || invalid || pristine}/>
        </div>
        <FormRow label='Id'>
            <TextField name="id" readOnly={true}/>
        </FormRow>
        <FormRow label='Ник'>
            <TextField name="nick" label="Ник"/>
        </FormRow>
        <FormRow label='ФИО'>
            <TextField name="name" label="ФИО"/>
        </FormRow>
        <FormRow label='Город'>
            <CityCombobox/>
        </FormRow>
        <FormRow label='Индекс'>
            <TextField name="pindex" label="Индекс"/>
        </FormRow>
        <FormRow label='Адрес'>
            <TextField name="address" label="Адрес"/>
        </FormRow>
    </Form>
}

CustomerForm.propTypes = {
    submitting: PropTypes.bool.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default CustomerForm
