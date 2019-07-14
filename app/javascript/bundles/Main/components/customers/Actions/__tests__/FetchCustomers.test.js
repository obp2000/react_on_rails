import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from '../../../Store'
import FetchCustomers from '../FetchCustomers'
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

    const fetchCustomers = shallow(<FetchCustomers {...props}/>)
    return {props, fetchCustomers}
}

describe('action', () => {
    describe('FetchCustomers', () => {
        test('should have props', () => {
            const {props, fetchCustomers} = setup()
            expect(fetchCustomers.props().fetchCustomers).toBeInstanceOf(Function)
        })
    })
})