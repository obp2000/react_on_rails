import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Customer from '../NewCustomer'
import CustomerForm from '../CustomerForm'
jest.mock('../../../loading_spinner.gif', () => 'loading_spinner.gif')

Enzyme.configure({adapter: new Adapter()})

function setup() {

    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    const store = mockStore({
        customers: {
            customer: 'customer1'
        }
    })

    const props = {
        store
    }

    const customer = shallow(<Customer {...props}/>)
    return {props, customer}
}

describe('container', () => {
    describe('Customer', () => {
        test('should have props', () => {
            const {props, customer} = setup()
            const customerForm = customer.find(CustomerForm)
            expect(customerForm.props().initialValues).toBe(props.store.getState().customers.customer)
        })
    })
})