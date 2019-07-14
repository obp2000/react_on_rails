import React from 'react'
import {Link} from 'react-router-dom'

const NavBarBrand = () => {
    return <Link to="/" className="navbar-brand">
        <span className="badge badge-secondary">Best C</span>
    </Link>
}

export default NavBarBrand