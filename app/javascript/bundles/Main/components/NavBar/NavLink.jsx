import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

const NavLink = ({to, text, children}) => {
    return <Link to={to} className="nav-link">{children ? children : text}</Link>
}

NavLink.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string
}

export default NavLink