import PropTypes from 'prop-types'
import React from 'react'

const RenderProfile = ({name, email, nickname}) => {
    return <div className="card">
        <div className="card-body">
            <h5 className="card-title">Профиль</h5>
            <div className="row">
                <div className="col-sm-2">
                    Email: {email}
                </div>
                <div className="col-sm-8"></div>
            </div>
            <div className="row">
                <div className="col-sm-2">
                    Имя: {name}
                </div>
                <div className="col-sm-8"></div>
            </div>
            <div className="row">
                <div className="col-sm-2">
                    Ник: {nickname}
                </div>
                <div className="col-sm-8"></div>
            </div>
        </div>
        {/* <div className="card-footer">
                <div className="row">
                    <div className="col-sm-3 offset-3">
                        <button className="btn btn-outline-primary btn-sm">
                            Выйти
                        </button>
                    </div>
                </div>
            </div> */}
    </div>
}

const {number, string, func, bool, object} = PropTypes

RenderProfile.propTypes = {
    name: string,
    email: string,
    nickname: string
}

export default RenderProfile
