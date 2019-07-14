import PropTypes from 'prop-types'
import React from 'react'
import AuthDialog from '../auth/Containers/AuthDialog'
import ToggleModalLink from './Containers/ToggleModalLink'
import LinkToSignout from '../auth/Containers/LinkToSignout'
import NavLink from './NavLink'
import NavItem from './NavItem'
import NavBarBrand from './NavBarBrand'
import NavBarToggler from './NavBarToggler'
import Search from '../Search/Containers/Search'

const NavBar = ({isAuthenticated}) => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavBarBrand/>
        <NavBarToggler/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <NavItem className="active">
                    <NavLink to='/'>
                        Главная
                        <span className="sr-only">(current)</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/products' text='Ткани'/>
                </NavItem>
                <NavItem>
                    <NavLink to='/customers' text='Покупатели'/>
                </NavItem>
                <NavItem>
                    <NavLink to='/orders' text='Заказы'/>
                </NavItem>
                {!isAuthenticated && <NavItem placement="bottom">
                    <ToggleModalLink/>
                </NavItem>}
                {isAuthenticated && <NavItem>
                    <NavLink to='/profile' text='Профиль'/>
                </NavItem>}
                {isAuthenticated && <NavItem>
                    <LinkToSignout/>
                </NavItem>}
            </ul>
            <Search/>
        </div>
        <AuthDialog/>
    </nav>
}

NavBar.propTypes = {
    isAuthenticated: PropTypes.bool
}

export default NavBar