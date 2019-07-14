// import fetch from 'cross-fetch'
import 'cross-fetch/polyfill'
import {createAction, createReducer} from 'redux-act'
import $ from 'jquery'

export const requestCustomers = createAction()
export const receiveCustomers = createAction(customers_info => customers_info)
export const requestCustomer = createAction()
export const receiveCustomer = createAction(customer => customer)
export const requestUpdateCustomer = createAction()
export const receiveUpdateCustomer = createAction(customer => customer)
export const requestDeleteCustomer = createAction()
export const receiveDeleteCustomer = createAction(customer_id => customer_id);
export const requestSearchCustomers = createAction()
export const receiveSearchCustomers = createAction(search_customers => search_customers)
export const requestSearchCities = createAction()
export const receiveSearchCities = createAction(search_cities => search_cities)

function fetchCustomers(page = '1', term = '') {
  return dispatch => {
    dispatch(requestCustomers())
    return fetch(`/api/customers.json?page=${page}&term=${term}`)
      .then(response => response.json())
      .then(json => dispatch(receiveCustomers({
        ...json,
        page,
        term
      })))
  }
}

export function fetchCustomersIfNeeded(page, term) {
  return (dispatch, getState) => {
    const {
      customers: {
        page: loadedPage,
        term: loadedTerm
      }
    } = getState()
    if (page != loadedPage || term != loadedTerm) {
      return dispatch(fetchCustomers(page, term))
    }
  }
}

function fetchCustomer(customer_id) {
  return dispatch => {
    dispatch(requestCustomer())
    if (customer_id == 'new') {
      return dispatch(receiveCustomer({}))
    } else {
      return fetch(`/api/customers/${customer_id}`)
        .then(response => response.json())
        .then(json => dispatch(receiveCustomer(json)))
    }
  }
}

export function fetchCustomerIfNeeded(customer_id) {
  return (dispatch, getState) => {
    if (true) {
      return dispatch(fetchCustomer(customer_id))
    }
  }
}

export function updateCustomer(values) {
  const formData = new FormData()
  $.each(values, (key, value) => {
    if (key != 'image' || value.name) {
      if (key == 'city' && value) {
        formData.append('customer[pindex]', value.pindex)
      } else {
        formData.append('customer[' + key + ']', value)
      }
    }
  });
  return (dispatch, getState) => {
    dispatch(requestUpdateCustomer())
    const {
      customers: {
        customer: {
          id = ''
        }
      }
    } = getState()
    return fetch('/api/customers/' + id, {
        method: id
          ? 'PUT'
          : 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(json => dispatch(receiveUpdateCustomer(json)))
      .catch(e => console.error(e))
  }
}

export function deleteCustomer(customer_id) {
  return dispatch => {
    dispatch(requestDeleteCustomer())
    return fetch(`/api/customers/${customer_id}`, {method: 'DELETE'}).then(() => dispatch(receiveDeleteCustomer(customer_id)))
  }
}

export function searchCustomers(value) {
  return dispatch => {
    dispatch(requestSearchCustomers())
    return fetch('/api/customers/autocomplete/' + value)
      .then(response => response.json())
      .then(json => dispatch(receiveSearchCustomers(json.customers)))
  }
}

export function search(value) {
  return dispatch => {
    dispatch(requestCustomers())
    return fetch('/api/customers/autocomplete/' + value)
      .then(response => response.json())
      .then(json => dispatch(receiveCustomers({
        ...json
      })))
  }
}

export function searchCities(value) {
  return dispatch => {
    dispatch(requestSearchCities())
    return fetch('/api/cities/autocomplete/' + value)
      .then(response => response.json())
      .then(json => dispatch(receiveSearchCities(json)))
  }
}

const init_customers_info = {
  customers: [],
  totalCount: 0,
  page: null,
  totalPages: 0,
  term: null
}

const customers = createReducer({
  [requestCustomers]: (state) => ({
    ...state,
    ...init_customers_info,
    isFetching: true,
    didInvalidate: false
  }),
  [receiveCustomers]: (state, customers_info) => ({
    ...state,
    ...customers_info,
    isFetching: false,
    loaded: true
  }),
  [requestCustomer]: (state) => ({
    ...state,
    customer: null,
    isFetching: true
  }),
  [receiveCustomer]: (state, customer) => ({
    ...state,
    customer,
    isFetching: false
  }),
  [requestDeleteCustomer]: (state) => ({
    ...state,
    isFetching: true
  }),
  [receiveDeleteCustomer]: (state, customer_id) => ({
    ...state,
    customers: state
      .customers
      .filter(cust => {
        return (cust.id != customer_id)
      }),
    totalCount: state.totalCount - 1,
    isFetching: false
  }),
  [requestUpdateCustomer]: (state) => ({
    ...state,
    isFetching: true
  }),
  [receiveUpdateCustomer]: (state, customer) => ({
    ...state,
    customer,
    customers: [
      ...state
        .customers
        .filter(cust => {
          return (cust.id != customer.id)
        }),
      customer
    ],
    isFetching: false
  }),
  [requestSearchCustomers]: (state) => ({
    ...state,
    search_customers: [],
    isFetching: true,
    didInvalidate: false
  }),
  [receiveSearchCustomers]: (state, search_customers) => ({
    ...state,
    search_customers,
    isFetching: false,
    loaded: true
  }),
  [requestSearchCities]: (state) => ({
    ...state,
    search_cities: [],
    isFetching: true,
    didInvalidate: false
  }),
  [receiveSearchCities]: (state, search_cities) => ({
    ...state,
    search_cities,
    isFetching: false,
    loaded: true
  })
}, {
  ...init_customers_info,
  isFetching: false,
  didInvalidate: false,
  loaded: false,
  customer: null,
  search_customers: [],
  search_cities: []
});

export default customers
