import PropTypes from 'prop-types'
import React from 'react'
import {Form} from 'redux-form'

import Prices from './Containers/Prices'
import SubmitButton from '../Shared/SubmitButton'
import BackButton from '../Shared/BackButton'
import TextField from '../Shared/TextField'
import NumberField from '../Shared/NumberField'
import FileField from '../Shared/FileField'
import Loading from '../Loading'

const ProductForm = ({
    submitting,
    invalid,
    pristine,
    density_for_count,
    meters_in_roll,
    image_url,
    isFetching,
    handleSubmit,
    onSubmit
}) => {
    return isFetching ? <Loading/> : <Form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
        <h4>Ткань</h4>
        <div className="col-sm-12 text-right">
            <BackButton/>
            &nbsp;
            <SubmitButton submitDisabled={submitting || invalid || pristine}/>
        </div>
        <div className="form-group row">
            <label htmlFor="id" className="col-sm-1 col-form-label">Id</label>
            <div className="col-sm-2">
                <TextField name="id" readOnly={true}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-1 col-form-label">Название</label>
            <div className="col-sm-6">
                <TextField name="name" label="Название"/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-1 col-form-label">Фото</label>
            <div className="col-sm-4">
                <FileField name="image" label="Фото"/>
                <br/>
                <img src={image_url} width="100px"/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-1 col-form-label">Плотность, гр/м2</label>
            <div className="col-sm-2">
                <NumberField name="density" label="Плотность, гр/м2"/>
            </div>
            <label className="col-sm-2 col-form-label">Плотность для витрины, гр/м2</label>
            <div className="col-sm-2">
                <NumberField name="density_shop" label="Плотность для витрины, гр/м2"/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-1 col-form-label">Ширина, см</label>
            <div className="col-sm-2">
                <NumberField name="width" label="Ширина, см"/>
            </div>
            <label className="col-sm-2 col-form-label">Ширина для витрины, см</label>
            <div className="col-sm-2">
                <NumberField name="width_shop" label="Ширина для витрины, см"/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-1 col-form-label">Цена, руб./м</label>
            <div className="col-sm-2">
                <NumberField name="price" label="Цена, руб./м"/>
            </div>
            <label className="col-sm-2 col-form-label">Цена до выкупа, руб./м</label>
            <div className="col-sm-2">
                <NumberField name="price_pre" label="Цена до выкупа, руб./м"/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Себестоимость, руб./м</label>
            <div className="col-sm-10">
                <Prices />
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Цена, $/кг</label>
            <div className="col-sm-2">
                <NumberField name="dollar_price" label="Цена, $/кг"/>
            </div>
            <label className="col-sm-2 col-form-label">Курс $</label>
            <div className="col-sm-2">
                <NumberField name="dollar_rate" label="Курс $"/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Вес отреза, гр</label>
            <div className="col-sm-2">
                <NumberField name="weight_for_count" label="Вес отреза, гр."/>
            </div>
            <label className="col-sm-2 col-form-label">Длина отреза, м</label>
            <div className="col-sm-2">
                <NumberField name="length_for_count" label="Длина отреза, м"/>
            </div>
            <label className="col-sm-2 col-form-label">Плотность отреза, гр/м2</label>
            <div className="col-sm-2">
                {density_for_count.toFixed(0)}
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Вес рулона, кг</label>
            <div className="col-sm-2">
                <NumberField name="weight" label="Вес рулона, кг"/>
            </div>
            <label className="col-sm-2 col-form-label">Метров в рулоне</label>
            <div className="col-sm-2">
                {meters_in_roll.toFixed(2)}
            </div>
        </div>
    </Form>
}

ProductForm.propTypes = {
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    density_for_count: PropTypes.number,
    meters_in_roll: PropTypes.number,
    image_url: PropTypes.string,
    isFetching: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired
}

ProductForm.defaultProps = {
    density_for_count: 0,
    meters_in_roll: 0,
    image_url: ''
}

export default ProductForm