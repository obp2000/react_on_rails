import PropTypes from 'prop-types'
import React from 'react'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import ToggleLoginLink from './Containers/ToggleLoginLink'

import Login from './Containers/Login'
import Register from './Containers/Register'

const AuthDialog = ({modal, login, toggleModal}) => {
    return <Modal isOpen={modal}>
        <ModalHeader toggle={toggleModal}>{login
                ? 'Вход'
                : 'Регистрация'}</ModalHeader>
        <ModalBody>
            {login
                ? <Login/>
                : <Register/>}
            <div className="row">
                <div className="col-sm-10 offset-sm-1">
                    <ToggleLoginLink/>
                </div>
            </div>
        </ModalBody>
    </Modal>
}

AuthDialog.propTypes = {
    modal: PropTypes.bool,
    login: PropTypes.bool,
    toggleModal: PropTypes.func
}

export default AuthDialog
