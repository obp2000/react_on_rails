import React from 'react'
import Error from './Error'
import {Field} from 'redux-form'
import renderField from './RenderField'

const RenderLogin = ({handleSubmit, errors}) => {
  return (
    <div>
      <h3>Вход</h3>
      {errors && <Error errors={errors}/>}
      <div className="form-group row">
        <label className="col-sm-3 col-form-label offset-sm-1" htmlFor="email">Email</label>
        <div className="col-sm-8">
          <Field
            name="email"
            type="email"
            component={renderField}
            required
            className="validate"/>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-3 col-form-label offset-sm-1" htmlFor="password">Пароль</label>
        <div className="col-sm-8">
          <Field
            name="password"
            type="password"
            component={renderField}
            required
            className="validate"/>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10 offset-sm-2">
          <input
            type="submit"
            value="Вход"
            onClick={handleSubmit}
            className="btn btn-outline-primary btn-sm"/>
        </div>
      </div>
    </div>
  )
}

export default RenderLogin
