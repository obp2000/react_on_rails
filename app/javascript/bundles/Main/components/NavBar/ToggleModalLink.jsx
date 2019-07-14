import PropTypes from 'prop-types'
import React from 'react'

const ToggleModalLink = ({toggleModal}) => <a className="nav-link" style={{
    cursor: 'pointer'
}} onClick={toggleModal}>
    Вход/Регистрация
</a>

ToggleModalLink.propTypes = {
    toggleModal: PropTypes.func
}

export default ToggleModalLink