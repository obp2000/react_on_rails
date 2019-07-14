import React from 'react'
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import configureStore from '../../../Store'
import FetchCustomers from '../../Actions/FetchCustomers'
import Customers from '../Customers'
import * as ReduxCustomers from '../../../redux/Customers'
jest.mock('../../../loading_spinner.gif', () => 'loading_spinner.gif')

Enzyme.configure({adapter: new Adapter()})

function setup() {

    const {store, history} = configureStore()

    const props = {
        store,
        match: {
            params: {
                page: '2'
            }
        }
    }

    const CustomersWrapper = mount(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <FetchCustomers {...props}/>
            </ConnectedRouter>
        </Provider>
    )
    return {props, CustomersWrapper}
}

describe('action', () => {
    describe('Customers', () => {
        test('should render Customers component', () => {
            const {props, CustomersWrapper} = setup()
            const customers = CustomersWrapper.find(Customers)
            expect(customers.length).toBe(1)
        })
        test('should have props', () => {
            const {props, CustomersWrapper} = setup()
            const customers = CustomersWrapper.find(Customers)
            expect(customers.props().fetchCustomers).toBeInstanceOf(Function)
        })
        test('should fetch customers after mount', () => {
            const fetchCustomersIfNeeded = jest.spyOn(ReduxCustomers, 'fetchCustomersIfNeeded')
            const {props, CustomersWrapper} = setup()
            expect(fetchCustomersIfNeeded).toHaveBeenCalledTimes(1)
            expect(fetchCustomersIfNeeded).toHaveBeenCalledWith(props.match.params.page)
        })
    })
})