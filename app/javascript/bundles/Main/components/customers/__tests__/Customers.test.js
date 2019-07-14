import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CustomersHeader from '../CustomersHeader'
import Customers from '../Customers'
import Customer from '../Customer'
import Loading from '../../Loading'
jest.mock('../../loading_spinner.gif', () => 'loading_spinner.gif')

Enzyme.configure({adapter: new Adapter()})

function setup(isFetching = false) {
  const props = {
    customers: ['customer1', 'customer2'],
    totalCount: 2,
    isFetching
  }

  const customers = shallow(<Customers {...props}/>)

  return {customers, props}
}

describe('components', () => {
  describe('Customers', () => {
    it('should render title and header', () => {
      const {customers, props} = setup(false)
      const title = customers.find('h3')
      expect(title.length).toBe(1)
      expect(title.text()).toBe(`Покупатели (${props.totalCount})`)
      const header = customers.find(CustomersHeader)
      expect(header.length).toBe(1)
    })
    it('should render list of customers and not render loading after fetching ', () => {
      const {customers, props} = setup(false)
      const customersList = customers.find(Customer)
      expect(customersList.length).toBe(2)
      const loading = customers.find(Loading)
      expect(loading.length).toBe(0)
    })
    it('should render loading and not render list of customers in fetching', () => {
      const {customers, props} = setup(true)
      const loading = customers.find(Loading)
      expect(loading.length).toBe(1)
      const customersList = customers.find(Customer)
      expect(customersList.length).toBe(0)
    })
  })
})
