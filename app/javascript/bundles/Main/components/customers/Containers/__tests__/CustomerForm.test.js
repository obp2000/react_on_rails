import React from 'react'
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
// import configureMockStore from 'redux-mock-store' import thunk from
// 'redux-thunk'
import configureStore from '../../../Store'
import CustomerForm from '../CustomerForm'
import RenderCustomerForm from '../../CustomerForm'
jest.mock('../../../loading_spinner.gif', () => 'loading_spinner.gif')

Enzyme.configure({adapter: new Adapter()})

function setup() {

    const {store, history} = configureStore()

    const props = {
        store
    }

    const customerForm = mount(
        <Provider store={store}>
            <ConnectedRouter history={history}><CustomerForm {...props}/></ConnectedRouter>
        </Provider>
    )
    return {props, customerForm}
}

describe('container', () => {
    describe('customerForm', () => {
        test('should have props', () => {
            const {props, customerForm} = setup()
            // expect(props.store.getState().form).toBe({})
            const renderCustomerForm = customerForm.find(RenderCustomerForm)
            expect(renderCustomerForm.length).toBe(1)
            expect(renderCustomerForm.props().handleSubmit).toBeInstanceOf(Function)
            expect(renderCustomerForm.props().onSubmit).toBeInstanceOf(Function)
            expect(renderCustomerForm.props().submitting).toBe(false)
            expect(renderCustomerForm.props().invalid).toBe(true)
            expect(renderCustomerForm.props().pristine).toBe(true)
        })
    })
})