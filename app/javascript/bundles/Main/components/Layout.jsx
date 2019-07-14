import PropTypes from 'prop-types'
import React from 'react'

import {Route, Switch, withRouter} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from "react-transition-group"

import NavBar from './NavBar/Containers/NavBar'
import Products from './products/Actions/FetchProducts'
import Product from './products/Actions/FetchProduct'
import Customers from './customers/Actions/FetchCustomers'
import Customer from './customers/Actions/FetchCustomer'
import Orders from './orders/Actions/FetchOrders'
import Order from './orders/Actions/FetchOrder'
import ContactForm from './old/Test'
import Profile from './profile/Profile'
import PrivateRoute from './privateRoute'
// import Signup from './signup'
import Register from './auth/Containers/Register'
import Login from './auth/Containers/Login'

import Pagination from './Pagination/Containers/Pagination'

import {ConnectedRouter} from 'connected-react-router'

const Layout = ({history}) => {
  return <ConnectedRouter history={history}>
    <div className="container">
      <NavBar/>
      <Route exact path="/" component={Products}/>
      <Route path="/signup" component={Register}/>
      <Route path="/login" component={Login}/>
      {/* <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}> */}
          <Switch>
            <Route exact path="/products/pages/:page" component={Products}/>
            <Route exact path="/products" component={Products}/>
            <Route path="/products/:id" component={Product}/>
            <Route exact path="/orders/pages/:page" component={Orders}/>
            <Route exact path="/orders" component={Orders}/>
            <Route path="/orders/:id" component={Order}/>
            <Route exact path="/customers/pages/:page" component={Customers}/>
            <Route exact path="/customers" component={Customers}/>
            <Route path="/customers/:id" component={Customer}/>
            <Route exact path="/test" component={ContactForm}/>
            <PrivateRoute exact path="/profile" component={Profile}/> {/* {authRoutes()} */}
          </Switch>
        {/* </CSSTransition>
      </TransitionGroup> */}
      <Switch>
        <Route exact path="/products/pages/:page" component={Pagination}/>
        <Route exact path="/products" component={Pagination}/>
        <Route exact path="/customers/pages/:page" component={Pagination}/>
        <Route exact path="/customers" component={Pagination}/>
        <Route exact path="/orders/pages/:page" component={Pagination}/>
        <Route exact path="/orders" component={Pagination}/>
      </Switch>
    </div>
  </ConnectedRouter>
}

Layout.propTypes = {
  history: PropTypes.object
}

export default Layout
