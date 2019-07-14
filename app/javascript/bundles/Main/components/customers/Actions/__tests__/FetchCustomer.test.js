import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import * as redux from 'react-redux'
import configureStore from '../../../Store'
import FetchCustomer from '../FetchCustomer'
jest.mock('../../../loading_spinner.gif', () => 'loading_spinner.gif')

Enzyme.configure({adapter: new Adapter()})

function setup() {

    const {store, history} = configureStore()

    const props = {
        store,
        match: {
            params: {
                id: '2'
            }
        }
    }

    const fetchCustomer = shallow(<FetchCustomer {...props}/>)
    return {props, fetchCustomer}
}

describe('action', () => {
    describe('FetchCustomer', () => {
        test('should have props', () => {
            // const connect = jest.spyOn(redux, 'connect')
            const {props, fetchCustomer} = setup()
            expect(fetchCustomer.props().fetchCustomer).toBeInstanceOf(Function)
            // expect(connect).toHaveBeenCalledTimes(1)
        })
    })
})