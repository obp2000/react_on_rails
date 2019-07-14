import PropTypes from 'prop-types'
import React from 'react'

const LinkToSignout = ({signout}) => <a href="#" onClick={signout} className="nav-link">Выйти</a>

LinkToSignout.propTypes = {
    signout: PropTypes.func
}

export default LinkToSignout