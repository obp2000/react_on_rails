import PropTypes from 'prop-types'
import React from 'react'

const toggleLoginLink = ({login, toggleLogin}) => {
    return <a href="javascript:void(0)" onClick={toggleLogin}>
        {login
            ? 'Регистрация'
            : 'Вход'}
    </a>
}

toggleLoginLink.propTypes = {
    login: PropTypes.bool,
    toggleLogin: PropTypes.func
}

export default toggleLoginLink
