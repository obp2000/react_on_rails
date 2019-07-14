import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import auth from './auth'
import customers from './Customers'
import products from './Products'
import orders from './Orders'
import authDialog from './AuthDialog'
import navBar from './NavBar'

const rootReducer = combineReducers({
    customers,
    products,
    orders,
    form: formReducer,
    auth,
    authDialog,
    navBar
})

export default rootReducer