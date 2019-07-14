import fetch from 'cross-fetch'
import fetchJsonp from 'fetch-jsonp'
import {createAction, createReducer} from 'redux-act'
import {change} from 'redux-form'

const requestOrders = createAction()
const receiveOrders = createAction(orders_info => orders_info)
const requestOrder = createAction()
const receiveOrder = createAction(order => order)
const requestUpdateOrder = createAction()
const receiveUpdateOrder = createAction(order => order)
const requestDeleteOrder = createAction()
const receiveDeleteOrder = createAction(order_id => order_id)
const requestPostCost = createAction()
const receivePostCost = createAction()
// const deleteOrderItem = createAction(order_item_id => order_item_id)

export function fetchOrders(page) {
  return dispatch => {
    dispatch(requestOrders())
    return fetch(`/api/orders.json?page=${page}`)
      .then(response => response.json())
      .then(json => dispatch(receiveOrders({
        ...json,
        page
      })))
  }
}

export function fetchOrdersIfNeeded(page, prevPage) {
  return (dispatch, getState) => {
    if (page != prevPage) {
      return dispatch(fetchOrders(page))
    }
  }
}

export function updateOrder(order_id, values) {
  const formData = new FormData();
  $.each(values, (key, value) => {
    if (key != 'image' || value.name) {
      if (key == 'order_items') {
        value.map((order_item, order_item_index) => {
          $.each(order_item, (order_item_key, order_item_value) => {
            if (order_item_key == 'product') {
              formData.append(`order[order_items_attributes][${order_item_index}][product_id]`, order_item_value.id)
            } else {
              formData.append(`order[order_items_attributes][${order_item_index}][${order_item_key}]`, order_item_value)
            }
          })
        })
      } else if (key == 'customer') {
        formData.append('order[customer_id]', value.id)
        // } else if (key == 'delivery_type') { formData.append('order[delivery_type]',
        // value.value)
      } else {
        formData.append(`order[${key}]`, value)
      }
    }
  })
  return (dispatch, getState) => {
    dispatch(requestUpdateOrder())
    const {orders: {order: {id=''}}} = getState()
    return fetch('/api/orders/' + id, {
        method: id
          ? 'PUT'
          : 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(json => dispatch(receiveUpdateOrder(json)))
  }
}

export function fetchOrder(order_id) {
  return dispatch => {
    dispatch(requestOrder())
    if (order_id == 'new') {
      return dispatch(receiveOrder({}))
    } else {
      return fetch(`/api/orders/${order_id}`)
        .then(response => response.json())
        .then(json => dispatch(receiveOrder(json)))
    }
  }
}

export function fetchOrderIfNeeded(order_id) {
  return (dispatch, getState) => {
    if (true) {
      return dispatch(fetchOrder(order_id))
    }
  }
}

export function deleteOrder(order_id) {
  return dispatch => {
    dispatch(requestDeleteOrder())
    return fetch(`/api/orders/${order_id}`, {method: 'DELETE'}).then(() => dispatch(receiveDeleteOrder(order_id)))
  }
}

export function getPostCost(weight) {
  return (dispatch, getState) => {
    const {
      orders: {
        order: {
          customer: {
            pindex
          }
        }
      }
    } = getState()
    if (weight && pindex) {
      const url = `http://test.postcalc.ru/?f=153038&t=${pindex}&w=${weight}&o=json&st=localhost&ml=obp2000@mail.ru`
      dispatch(requestPostCost())
      return fetchJsonp(url)
        .then(response => response.json())
        .then(json => {
          const post_cost = parseInt(json['Отправления']['ЦеннаяПосылка']['Тариф'])
          dispatch(change('order', 'post_cost', post_cost))
          dispatch(receivePostCost())
        })
    }
  }
}

const init_orders_info = {
  orders: [],
  totalCount: 0,
  page: "1",
  totalPages: 0
}

const orders = createReducer({
  [requestOrders]: (state) => ({
    ...state,
    ...init_orders_info,
    isFetching: true,
    didInvalidate: false
  }),
  [receiveOrders]: (state, orders_info) => ({
    ...state,
    ...orders_info,
    isFetching: false,
    loaded: true
  }),
  [requestOrder]: (state) => ({
    ...state,
    order: null,
    isFetching: true
  }),
  [receiveOrder]: (state, order) => ({
    ...state,
    order,
    isFetching: false
  }),
  [requestDeleteOrder]: (state) => ({
    ...state,
    isFetching: true
  }),
  [receiveDeleteOrder]: (state, order_id) => ({
    ...state,
    orders: state
      .orders
      .filter(ord => {
        return (ord.id != order_id)
      }),
    totalCount: state.totalCount - 1,
    isFetching: false
  }),
  [requestUpdateOrder]: (state) => ({
    ...state,
    isFetching: true
  }),
  [receiveUpdateOrder]: (state, order) => ({
    ...state,
    order,
    orders: [
      ...state
        .orders
        .filter(ord => {
          return (ord.id != order.id)
        }),
      order
    ],
    isFetching: false
  }),
  [requestPostCost]: (state) => ({
    ...state,
    isFetching: true
  }),
  [receivePostCost]: (state) => ({
    ...state,
    isFetching: false
  }),
  // [deleteOrderItem]: (state, order_item_id) => ({   ...state,   order: {
  // ...state.order,     order_items: [...state       .order       .order_items
  // .filter(order_item => {         return order_item.id != order_item_id  }),
  //    {...state       .order       .order_items       .find(order_item => {
  //    return order_item.id == order_item_id       }), _destroy: true}    ]   },
  //  isFetching: false })
}, {
  ...init_orders_info,
  isFetching: false,
  loaded: false,
  order: {
    post_cost: 0,
    packet: 0,
    delivery_types: [],
    created_at: '',
    customer: {},
    order_items: []
  }
});

export default orders
